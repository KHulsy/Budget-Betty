var ajaxRequest;  // The variable that makes Ajax possible!
function ajaxFunction() {
   try {
      // Opera 8.0+, Firefox, Safari
      ajaxRequest = new XMLHttpRequest();
   } catch (e) {
   
      // Internet Explorer Browsers
      try {
         ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
      
         try {
            ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
         } catch (e) {
      
            // Something went wrong
            alert("Your browser broke!");
            return false;
         }
      }
   }
}
function validateUserId() {
   ajaxFunction();
   
   // Here processRequest() is the callback function.
   ajaxRequest.onreadystatechange = processRequest;
   
   if (!target) target = document.getElementById("userid");
   var url = "validate?id=" + escape(target.value);
   
   ajaxRequest.open("GET", url, true);
   ajaxRequest.send(null);
}
function validateUserId() {
   ajaxFunction();
   
   // Here processRequest() is the callback function.
   ajaxRequest.onreadystatechange = processRequest;
   
   if (!target) target = document.getElementById("userid");
   var url = "validate?id = " + escape(target.value);
   
   ajaxRequest.open("GET", url, true);
   ajaxRequest.send(null);
}
public void doGet(HttpServletRequest request,
   HttpServletResponse response) throws IOException, ServletException {
   String targetId = request.getParameter("id");
   
   if ((targetId != null) && !accounts.containsKey(targetId.trim())) {
      response.setContentType("text/xml");
      response.setHeader("Cache-Control", "no-cache");
      response.getWriter().write("<valid>true</valid>");
   } else {
      response.setContentType("text/xml");
      response.setHeader("Cache-Control", "no-cache");
      response.getWriter().write("<valid>false</valid>");
   }
}
