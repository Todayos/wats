
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

//轮播图