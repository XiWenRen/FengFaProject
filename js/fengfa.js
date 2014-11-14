//公司介绍模块的动画
$("#aboutUs").click(function(){
	var width = $(this).css("width");
	width = removePX(width);
	width = Math.round(width / $(document).width() * 100);
	$(this).animate({width:width == "10" ? "50%" : "10%"},1000);
});

var removePX =  function(str) {
	return str.substring(0, str.length - 2);
}

