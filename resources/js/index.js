
//当鼠标移入或移出位置图片时，设置当前位置提示信息
$('.location-img').hover(function () {
    $('.location').css('display', 'block');
}, function () {
    $('.location').css('display', 'none');
})

//设置地区选择菜单的点击事件
$('.location-img').click(function () {
    $(".location").css("display", 'none');
    if ($('.city').css('display') == 'none' || $('.city').css('display') == '') {
        $('.city').css('display', 'block');
    } else {
        $('.city').css('display', 'none');
    }
})

//给安全登录方式添加点击事件
$('.safe-login').click(function () {
    if ($('.safe').css('display') == 'none' || $('.safe').css('display') == '') {
        $('.account-login').css('color', '#777');
        $('.safe-login').css('color', '#fa2f2f');
        $('.account').css('display', 'none');
        $('.safe').css('display', 'block');
    }
})

//给账号登录添加点击事件
$('.account-login').click(function () {
    if ($('.account').css('display') == 'none' || $('.account').css('display') == '') {
        $('.account-login').css('color', '#fa2f2f');
        $('.safe-login').css('color', '#777');
        $('.safe').css('display', 'none');
        $('.account').css('display', 'block');
    }
})

//轮播图----------------------------------------------------------------------------
//控制显示的是哪个小圆点和哪张图片
var ctn = 1;
//设置定时切换图片

function run() {
    //让ctn号元素显示，让兄弟元素隐藏
    $(".wheel img").eq(ctn).fadeIn(500).siblings('img').fadeOut(500);
    //让ctn号元素变黄色，让兄弟元素颜色变灰
    $(".btn li").eq(ctn).css('backgroundColor', '#e8f808').siblings('li').css("backgroundColor", "#ddd");
    ctn++;
    if (ctn == 4) {
        ctn = 0;
    }
}
//设置定时器
var timer = setInterval(run, 4000);

//鼠标移入wheel div停止定时器，移出重启定时器
$(".wheel").hover(function () {
    clearInterval(timer);
}, function () {
    timer = setInterval(run, 2000);
});

// $('wheel ul li').click()

//移入下方的小圆圈显示对应的图片
$(".wheel ul li").mouseenter(function () {
    ctn = $(this).index();
    $(".wheel img").eq(ctn).show().siblings('img').hide();
    //让ctn号元素变黄色，让兄弟元素颜色变灰
    $(".btn li").eq(ctn).css('backgroundColor', '#e8f808').siblings('li').css("backgroundColor", "#ddd");
})
//----------------------------------------------------------------------------

//文章、视频发布时间
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                   //月份   
        "d+": this.getDate(),                        //日   
        "h+": this.getHours(),                       //小时   
        "m+": this.getMinutes(),                     //分   
        "s+": this.getSeconds(),                     //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds()                  //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
var date = new Date().Format("yyyy-MM-dd hh:mm:ss");
$('.issue_date').html(date);


//左边栏中的项目分类选项，默认选中 表白 类
//获取当前li标签索引
var li = $('.left-menu ul li');
//是否进行了点击操作
var isClick = false;
li[3].style.backgroundColor = '#fa2f2f';
li[3].style.borderRadius = '5%';
//创建移入移出事件
$('.left-menu ul li').hover(function () {
    $(this).css('backgroundColor', '#fa2f2f').siblings('li').css('backgroundColor', '#fff');
}, function () {
    if (isClick == false) {
        $(this).css('backgroundColor', '#fff');
        li[3].style.backgroundColor = '#fa2f2f';
    }
})
//创建点击事件
$('.left-menu ul li').click(function () {
    isClick = true;
    $(this).css('backgroundColor', '#fa2f2f').siblings('li').css('backgroundColor', '#fff');
    $(this).css('borderRadius', '5%');
})

// 下拉加载新内容--------------------------------------
var article = $('.article');
var newPara = $('.new_para');
var pageBottom = $('.page_bottom');
window.onload = function () {
    article.onscroll = function () {
        var x = scrollTop;
        var y = scrollHeight;
        var z = clientHeight;
        if (x == y - z) {
            pageBottom[0].css('display', 'block');
            window.setTimeout('addNews()', 1000);
        }
    }
}

function addNews() {
    var news = article[0].innerHTML + newPara[0].innerHTML;
    article[0].innerHTML = news;
    pageBottom[0].css('display', 'none');
}
// ---------------------------------------------------
// ajax部分

$(function () {
    $('#njsf_edu').click(function () {
        $.ajax({
            type: "GET",
            url: "test.json",
            data: { username: $("#username").val(), content: $("#content").val() },
            dataType: "json",
            success: function (data) {
                $('#resText').empty();   //清空resText里面的所有内容
                var html = '';
                $.each(data, function (commentIndex, comment) {
                    html += '<div class="comment"><h6>' + comment['username']
                        + ':</h6><p class="para"' + comment['content']
                        + '</p></div>';
                });
                $('#resText').html(html);
            }
        });
    });
});

// function getXMLHttpRequest() {
//     var xhr = false;
//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         xhr = new ActiveXObject('Microsoft.XMLHTTP')
//     }
//     return xhr;
// }
// window.onload = function () {
    // alert(getXMLHttpRequest());
//     var $pageTitle = $('#njsf_edu');
//     $pageTitle.click(
//         function () {
//             var xhr = getXMLHttpRequest();

//             xhr.open('get', 'location.json');

//             xhr.send();

//             xhr.onreadystatechang = function () {
//                 if (xhr.readyStatus == 4) {
//                     if (xhr.status == 200) {
//                         return xhr.responseText;
//                     }else{
//                         return xhr.status;
//                     }
//                 }
//             }
//         }
//     )
// }
// ---------------------------------------------------新同事 陈玉霞
