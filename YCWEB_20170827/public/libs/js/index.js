$(function() {
    initPage();
    // 监听窗口大小变化
    $(window).resize(function() {
        initPage();
    })

    // 精品面授过程阴影过渡效果
    $(".floor1-list li").hover(function() {
        $(this).find(".shadow").stop()
        $(this).find(".shadow").fadeIn(500)
    }, function() {
        $(this).find(".shadow").stop()
        $(this).find(".shadow").fadeOut(500)
    })

    // 誉财网络学院 导航选中操作 
    $(".floor2-content-nav li").on("click", function() {
        $(".floor2-content-nav").find("li").removeClass("active");
        $(this).addClass("active");
    })

    // 权威备考交互
    $("ul.floor3-list li .item").hover(function() {
        $(this).children('.btns').children().eq(0).addClass("active");
    }, function() {
        $(this).children('.btns').children().removeClass("active");
    })
    $("ul.floor3-list .item .btns div").hover(function() {
        $(this).addClass("active").siblings().removeClass('active');
    })

    // 校区开班动态 导航选中操作 
    $(".floor3_01-nav ul li").on("click", function() {
        $(".floor3_01-nav ul").find("li").removeClass("active");
        $(this).addClass("active");
    })

    // 校区开班滚动
    $('#xqkb_Scroll').myScroll({
        speed: 40, //数值越大，速度越慢
        rowHeight: 40 //li的高度
    });

    // 咨询问答滚动
    $('#zxwd_Scroll').myScroll({
        speed: 80, //数值越大，速度越慢
        rowHeight: 30 //li的高度
    });


    // 名师团队阴影过渡效果
    $(".floor4-list li").hover(function() {
        $(this).find(".shadow").stop();
        $(this).find(".shadow").fadeIn(500);
    }, function() {
        $(this).find(".shadow").stop();
        $(this).find(".shadow").fadeOut(500);
    })

    // 明星学员风采过渡效果
    $(".floor6-list li").hover(function() {
        if ($(this).attr('class') != 'center') {
            $(this).find("img").stop()
            $(this).find("img").eq(1).fadeIn(800);
            $(this).find("img").eq(0).fadeOut(800)
        }
    }, function() {
        if ($(this).attr('class') != 'center') {
            $(this).find("img").stop()
            $(this).find("img").eq(0).fadeIn(800)
            $(this).find("img").eq(1).fadeOut(800);
        }
    })

    // 誉财教育之道过渡效果
    $(".floor8-list li").hover(function() {
        $(this).find(".hidea").stop();
        $(this).find(".showa").stop();
        $(this).find(".hidea").fadeIn(300);
        $(this).find(".showa").fadeOut(300)
    }, function() {
        $(this).find(".hidea").stop();
        $(this).find(".showa").stop();
        $(this).find(".showa").fadeIn(300)
        $(this).find(".hidea").fadeOut(300);
    })

    // 誉财校区分布交互效果(left)
    $("ul.floor7-xqfb-list li .xqnr-bg-l").hover(function() {
        xqfbMouseenter($(this), "left");
    }, function() {
        xqfbMouseLeave($(this), "left");
    })

    // 誉财校区分布交互效果(right)
    $("ul.floor7-xqfb-list li .xqnr-bg-r").hover(function() {
        xqfbMouseenter($(this), "right");
    }, function() {
        xqfbMouseLeave($(this), "right");
    })

    // 校区图片交互效果(left)
    $("ul.floor7-xqfb-list li.left .xq-img").hover(function() {
        xqfbMouseenter($(this).next(), "left");
    }, function() {
        xqfbMouseLeave($(this).next(), "left");
    })

    // 校区图片交互效果(right)
    $("ul.floor7-xqfb-list li.right .xq-img").hover(function() {
        xqfbMouseenter($(this).prev(), "right");
    }, function() {
        xqfbMouseLeave($(this).prev(), "right");
    })

    // 侧边固定导航交互效果
    $(".right-nav li").hover(function() {
        // 边框变化
        $(this).css({
            border: "1px solid #035ade",
            color: "#035ade"
        });
        $(this).next().css({
            borderTop: "1px solid #035ade",
        });
        // 图标变换
        var newSrc = $(this).children().eq(0).children('img').attr("src").replace(/\.png/, "");
        $(this).children().eq(0).children('img').attr("src", newSrc + "_01.png");
    }, function() {
        $(this).css({
            border: "1px solid #9d9d9d",
            color: "#7c7c7c"
        });
        $(this).next().css({
            borderTop: "1px solid #9d9d9d",
        });
        // 图标变换
        var newSrc = $(this).children().eq(0).children('img').attr("src").replace(/_01/, "");
        $(this).children().eq(0).children('img').attr("src", newSrc);
    });

    // 监听scroll方法
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 1000) {
            $(".right-nav").show();
        } else {
            $(".right-nav").hide();
        }
    })

});

// 校区分布交互效果(鼠标进入)
function xqfbMouseenter(ele, isl) {
    if (isl == 'left') {
        ele.next().children().eq(1).css("background", "#035ade");
    } else {
        ele.prev().children().eq(1).css("background", "#035ade");
    }
    ele.children('.shadow').stop();
    ele.children('.shadow').animate({ opacity: 0.8 }, 500);
    ele.children('.shadow-btns').stop();
    ele.children('.shadow-btns').fadeIn(500);
}

// 校区分布交互效果(鼠标离开)
function xqfbMouseLeave(ele, isl) {
    if (isl == 'left') {
        ele.next().children().eq(1).css("background", "#f7f7f7");
    } else {
        ele.prev().children().eq(1).css("background", "#f7f7f7");
    }
    ele.children('.shadow').stop();
    ele.children('.shadow').animate({ opacity: 0 }, 500);
    ele.children('.shadow-btns').stop();
    ele.children('.shadow-btns').fadeOut(500);
}

// 初始化加载
function initPage() {
    ViewMSZBContent();
}

// 加载名师直播模块
function ViewMSZBContent() {
    var view = $("#floor2ContentView");
    var tpl = $("#mszbTpl").html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
    });
}

// 加载精品录播模块
function ViewJPLBContent() {
    var view = $("#floor2ContentView");
    var tpl = $("#jplbTpl").html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
        // var myPlayer = videojs('my-video');
        // videojs("my-video").ready(function(){
        //  var myPlayer = this;
        //  myPlayer.play();
        // });
    });
}

// 加载智能题库模块
function ViewZLTkContent() {
    var view = $("#floor2ContentView");
    var tpl = $("#zntkTpl").html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
    });
}
