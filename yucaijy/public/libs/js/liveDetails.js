var scrollTop = $(document).scrollTop();
var detailNavTop = $('.details-content').offset().top - $('#detailNav').height();
$(function() {
	$(".zbkcnavlist li.fl a").on("click", function() {
		$(".zbkcnavlist").find("li.fl a").removeClass("active");
		$(this).addClass("active");
	})
	// 锚点平滑滚动
	$(".zbkcnavlist a").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - ($('.nav-box').height() + $('.top').height() + $('#detailNav').height()) + "px"
		}, 800);
		return false; //不要这句会有点卡顿
	});
	// 如果scrollTop大于详情导航的高度则固定到导航下面
	$(window).scroll(function() {
		var scrollTop = $(document).scrollTop();
		var detailNavTop = $('.details-content').offset().top - $('#detailNav').height() * 3.5;
		if(scrollTop > detailNavTop) {
			$('#detailNav').addClass('fixed_detailnav')
		} else {
			$('#detailNav').removeClass('fixed_detailnav')
		}
	});
})

// 进入详情页面先判断课程内容cj初级，zj中级，zc注册   
var type = GetRequest().type || 'cj'
$(function() {
	getDetailsLeftView(type);
})

// 显示左边图文
function getDetailsLeftView(type) {
	var view = $('#detailsLeftView');
	var tpl;
	if(type == 'cj') {
		tpl = $('#cjTpl').html();
	} else if(type == 'zj') {
		tpl = $('#zjTpl').html();
	} else {
		tpl = $('#zcTpl').html();
	}
	laytpl(tpl).render([], function(html) {
		view.html(html);
	});
}

// 获取url传参
function GetRequest() {
	var url = location.href; //获取url中"?"符后的字串
	var theRequest = new Object();
	if(url.indexOf("?") != -1) {
		var str = url.substr(url.indexOf("?") + 1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
// 展开表格
function showTable($this) {
	if($this.html() == '收起') {
		$this.html('共18节课');
		$this.parents().next('table').hide();
		$this.css('background', 'url("libs/imgs/liveDetails/new/icon.png") top 0 right 0 no-repeat');
	} else {
		$this.html('收起');
		$this.parents().next('table').show();
		$this.css('background', 'url("libs/imgs/liveDetails/new/icon2.png") top 0 right 0 no-repeat');
	}
}