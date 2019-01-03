
//位置选择
var city = document.getElementsByClassName('city');
var locationIs = document.getElementsByClassName('location');
var locationImg = document.getElementsByClassName('location-img');
locationImg[0].onmouseover = function () {
    locationIs[0].style.display = 'block';
};
locationImg[0].onmouseout = function () {
    locationIs[0].style.display = 'none';
};
locationImg[0].onclick = function () {
    document.getElementsByClassName('location')[0].style.display = 'none';
    if (document.getElementsByClassName('city')[0].style.display == 'none' || document.getElementsByClassName('city')[0].style.display == '') {
        document.getElementsByClassName('city')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('city')[0].style.display = 'none';
    }
};


//给登录方式添加点击事件
var accountLogin = document.getElementsByClassName('account-login');
var safeLogin = document.getElementsByClassName('safe-login');
function safeLoginFnc() {
    if (document.getElementsByClassName('safe')[0].style.display == 'none' || document.getElementsByClassName('safe')[0].style.display == '') {
        document.getElementsByClassName('account-login')[0].style.color = '#777';
        document.getElementsByClassName('safe-login')[0].style.color = '#fa2f2f';
        document.getElementsByClassName('account')[0].style.display = 'none';
        document.getElementsByClassName('safe')[0].style.display = 'block';
    }
}

function accountLoginFnc() {
    if (document.getElementsByClassName('account')[0].style.display == 'none' || document.getElementsByClassName('safe')[0].style.display == '') {
        document.getElementsByClassName('account-login')[0].style.color = '#fa2f2f';
        document.getElementsByClassName('safe-login')[0].style.color = '#777';
        document.getElementsByClassName('safe')[0].style.display = 'none';
        document.getElementsByClassName('account')[0].style.display = 'block';
    }
}

//轮播图----------------------------------------------------------------------------
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
var ctn = 2;
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
//----------------------------------------------------------------------------