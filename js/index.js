
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
    if (document.getElementsByClassName('city')[0].style.display == 'none') {
        console.log(document.getElementsByClassName('city')[0].style.display)
        document.getElementsByClassName('city')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('city')[0].style.display = 'none';
        console.log(document.getElementsByClassName('city')[0].style.display)
    }
};


//轮播图