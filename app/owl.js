

/* Styling Pagination*/

.owl-theme .owl-controls .owl-page{
	display: inline-block;
	zoom: 1;
	*display: inline;/*IE7 life-saver */
}
.owl-theme .owl-controls .owl-page span{
	display: block;
	width: 12px;
	height: 12px;
	margin: 5px 7px;
	filter: Alpha(Opacity=50);/*IE7 fix*/
	opacity: 0.5;
	-webkit-border-radius: 20px;
	-moz-border-radius: 20px;
	border-radius: 20px;
	background: #869791;
}

.owl-theme .owl-controls .owl-page.active span,
.owl-theme .owl-controls.clickable .owl-page:hover span{
	filter: Alpha(Opacity=100);/*IE7 fix*/
	opacity: 1;
}

/* If PaginationNumbers is true */

.owl-theme .owl-controls .owl-page span.owl-numbers{
	height: auto;
	width: auto;
	color: #FFF;
	padding: 2px 10px;
	font-size: 12px;
	-webkit-border-radius: 30px;
	-moz-border-radius: 30px;
	border-radius: 30px;
}

/* preloading images */
.owl-item.loading{
	min-height: 150px;
	background: url(AjaxLoader.gif) no-repeat center center
}
