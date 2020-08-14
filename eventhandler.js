$(window).scroll(function(){
if ($(window).scrollTop() == $(document).height() - $(window).height()){
if($(".pagenum:last").val() <= $(".rowcount").val()) {
var pagenum = parseInt($(".pagenum:last").val()) + 1;
getresult('getresult.php?page='+pagenum);
}
}
});
function getresult(url) {
$.ajax({
url: url,
type: "GET",
data:  {rowcount:$("#rowcount").val()},
beforeSend: function(){
$('#loader-icon').show();
},
complete: function(){
$('#loader-icon').hide();
},
success: function(data){
$("#faq-result").append(data);
},
error: function(){} 	        
});
}
require_once("dbcontroller.php");
$db_handle = new DBController();
$perPage = 10;

$sql = "SELECT * from php_interview_questions";
$page = 1;
if(!empty($_GET["page"])) {
$page = $_GET["page"];
}
$start = ($page-1)*$perPage;
if($start < 0) $start = 0;
$query =  $sql . " limit " . $start . "," . $perPage; 
$faq = $db_handle->runQuery($query);
if(empty($_GET["rowcount"])) {
$_GET["rowcount"] = $db_handle->numRows($sql);
}
$output = '';
if(!empty($faq)) {
$output .= '<input type="hidden" class="pagenum" value="' . $page . '" /><input type="hidden" class="rowcount" value="' . $_GET["rowcount"] . '" />';
foreach($faq as $k=>$v) {
 $output .=  '<div class="question">' . $faq[$k]["question"] . '</div>';
 $output .= '<div class="answer">' . $faq[$k]["answer"] . '</div>';
}
}
print $output;
