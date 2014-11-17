$(document).ready(function(){
	//首页的元素块距离顶部高度
	var marginTop = 600;
	$(".news").each(function(){
		$(this).css("marginTop",marginTop + "px");
		var prevHeight = $(this).css("height").removePX();
		marginTop += parseInt(prevHeight);
	});
	//设置标题位置
	setTitMargin();
	//设置图片高度
	setNewsPicHeight();
});

var setTitMargin = function(){
	//首页的两个大标题距块顶部高度
	var parentHeight = $(".news").height();
	var lineHeight = $(".tit").css("lineHeight").removePX();
	$(".tit").css("marginTop",(parentHeight - lineHeight) / 2 + "px");
	//设置左右距离
/*	var aboutTxt = $("#about").text();
	//因为是汉字，所以每个字的宽度就等于这个字的高度，也就等于这个字的字号
	var parentWidth = $(".tit").width();
	//保证两个标题的字数相同
	console.log(parentWidth);
	var txtWidth = aboutTxt.length * lineHeight;
	console.log(txtWidth);
	var marginWidth = (parentWidth - txtWidth) / 2;
	$("#about").css("paddingRight",marginWidth + "px");
	$("#tasks").css("paddingLeft",marginWidth + "px");*/
}

var setPicRowCenter = function(){
	
}

/**
 * 设置首页展示图片的宽高,图片比例16/9
 */
var setNewsPicHeight = function(){
	//获取图片父元素高度
	var parentWidth = $(".pic-each").width();
	var parentHeight = $(".pic-each").height();
	//显示两行图片，每行3张，总计6张
	var picWidth = parentWidth;
	var picHeight = parentWidth * 9 / 16;
	$(".pic-each img").height(picHeight);
	$(".pic-each img").width(picWidth);
	$(".pic-each-hover").height(picHeight);
	$(".pic-each-hover").width(picWidth);
	$(".pic-each section").height(parentHeight - picHeight);
	$(".pic-each section").width(picWidth);
	$(".pic-each section").css("marginTop",picHeight + "px");
}

/**
 * 公司介绍模块的动画
 */
$(".tit").click(function(){
	var $this = $(this);
	var $another = getAnother($this);
	$("#newsArt-front").css("float",$this.index() == 0 ? "left" : "right");
	console.log($another.attr("id"));
	$(".tit").fadeOut(500);
	if($another.css("display") == "none"){
		$("#newsArt-front").animate({width:"100%"},1000,function(){
			$this.css("width","48%");
			$(".tit").fadeIn(1000);
			$("#artContent").fadeOut(1000);
		});
	}else{
		$("#newsArt-front").animate({width:"30%"},1000,function(){
			$this.css("width","100%");
			$this.fadeIn(1000);
			$("#artContent").fadeIn(1000);
		});
	}
});

var getAnother = function(tit){
	return tit.index() == 0 ? tit.next() : tit.prev();
}

/**
 * 
 */
$(".pic-each").hover(function(){
	$(this).children().first().toggleClass("hover-show");
	$(this).children().last().toggleClass("pic-section-hover");
});

$(".pic-each-hover").hover(function(){
	$(this).children().first().animate({marginTop:"80px"},300);
},function(){
	$(this).children().first().animate({marginTop:"0px"},300);
})

String.prototype.removePX =  function() {
	return this.substring(0, this.length - 2);
}

