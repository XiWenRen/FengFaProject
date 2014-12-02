var windowHeight = $(window).height();

$(document).ready(function(){
	//设置标题位置
	setTitMargin();
	//设置轮播模块的高度
	setCarouselHeight();
	//设置图片高度
	setNewsPicHeight();
	//设置距顶部高度
	setElementMarginTop();
	//轮播动画
	setInterval(carouselShow, 8000);
});

/**
 * 设置轮播模块的高度
 */
var setCarouselHeight = function(){
	$(".carousel").css("height",windowHeight + "px");
}

/**
 * 首页的元素块距离顶部高度
 */
var setElementMarginTop = function(){
	var marginTop = windowHeight;
	$(".news").each(function(){
		$(this).css("marginTop",marginTop + "px");
		var prevHeight = $(this).css("height").removePX();
		marginTop += parseInt(prevHeight);
	});
}

var setTitMargin = function(){
	//首页的两个大标题距块顶部高度
	var parentHeight = $(".news").height();
	var lineHeight = $(".tit").css("lineHeight").removePX();
	$(".tit").css("marginTop",(parentHeight - lineHeight) / 2 + "px");
}

/**
 * 设置首页展示图片的宽高,图片比例16/9
 */
var setNewsPicHeight = function(){
	var windowWidth = $(window).width();
	if(windowWidth > 1400){
		$(".pic-row").width(1280);
		$(".pic-row").height(330);
		$("#newsPic").height(980);
	}
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
	$(".pic-section").height(parentHeight - picHeight);
	$(".pic-section").width(picWidth);
	$(".pic-section").css("marginTop",picHeight + "px");
}

/*================================动画模块==================================*/

/**
 * 菜单动画
 */
$(".menu").hover(function(){
	$(this).toggleClass("menu-active");
});

/**
 * 轮播动画
 */
var carouselShow = function() {
	var active = $(".carousel-active");
	var next;
	//如果是最后一个幻灯片，则从头开始显示，否则显示下一个
	if ($("#myCarousel").children().last().attr("id") == active.attr("id")) {
		next = active.parent().children().first();
	} else {
		next = active.next();
	}
	active.animate({"opacity": "0"}, 1000, function(){
		active.removeClass("carousel-active");
	});
	next.animate({"opacity": "1"}, 1000, function(){
		next.addClass("carousel-active");
	});
}

/**
 * 公司介绍模块的动画
 */
$(".tit").click(function(){
	var $this = $(this);
	var $another = getAnother($this);
	$("#newsArt-front").css("float",$this.index() == 0 ? "left" : "right");
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

$(".pic-each").hover(function(){
	$(this).children().first().children().animate({marginTop:"80px"},300);
},function(){
	$(this).children().first().children().animate({marginTop:"0px"},300);
})

var isIE6Or7 = function(){
	if (navigator.appName == "Microsoft Internet Explorer") {
		if (navigator.appVersion.match(/6./i) == "6." || navigator.appVersion.match(/7./i) == "7.") {
			return true;
		}
	}
	return false;
}

String.prototype.removePX =  function() {
	return this.substring(0, this.length - 2);
}

