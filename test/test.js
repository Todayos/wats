
//jquery代码
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

$('wheel ul li').click()

//移入下方的小圆圈显示对应的图片
$(".wheel ul li").mouseenter(function () {
    ctn = $(this).index();
    $(".wheel img").eq(ctn).show().siblings('img').hide();
    //让ctn号元素变黄色，让兄弟元素颜色变灰
    $(".btn li").eq(ctn).css('backgroundColor', '#e8f808').siblings('li').css("backgroundColor", "#ddd");
})