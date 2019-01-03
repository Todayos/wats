
//轮播图下方小圆圈按钮
function imgBtns(imgClassName, btnClassName) {
    if (document.getElementsByClassName(imgClassName)[0].style.display == 'none' || document.getElementsByClassName(imgClassName)[0].style.display == '') {
        document.getElementsByClassName('img1')[0].style.display = 'none';
        document.getElementsByClassName('img2')[0].style.display = 'none';
        document.getElementsByClassName('img3')[0].style.display = 'none';
        document.getElementsByClassName('img4')[0].style.display = 'none';
        document.getElementsByClassName('btn1')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn2')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn3')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn4')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName(imgClassName)[0].style.display = 'block';
        document.getElementsByClassName(btnClassName)[0].style.backgroundColor = '#e8f808';
    }
}

//轮播图定时变化
var ctn = 1;
//改变图片的显示状态
function imgChange() {
    var imgCtns = 'img' + ctn;
    var btnCtns = 'btn' + ctn;
    imgBtns(imgCtns, btnCtns);
    console.log("当前展示" + ctn);
    ctn++;
    if (ctn == 5) {
        ctn = 1;
    }
}

//设置定时效果
setInterval(imgChange, 4000);