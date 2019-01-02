var img1 = document.getElementsByClassName('img1');
var img2 = document.getElementsByClassName('img2');
var img3 = document.getElementsByClassName('img3');
var img4 = document.getElementsByClassName('img4');
var img4 = document.getElementsByClassName('wheel');

function imgBtn1() {

    if (document.getElementsByClassName('img1')[0].style.display == 'none' || document.getElementsByClassName('img1')[0].style.display == '') {
        document.getElementsByClassName('img1')[0].style.display = 'block';
        document.getElementsByClassName('img2')[0].style.display = 'none';
        document.getElementsByClassName('img3')[0].style.display = 'none';
        document.getElementsByClassName('img4')[0].style.display = 'none';
        document.getElementsByClassName('btn1')[0].style.backgroundColor = '#e8f808';
        document.getElementsByClassName('btn2')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn3')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn4')[0].style.backgroundColor = '#f3f3f3';
    }
}
function imgBtn2() {
    if (document.getElementsByClassName('img2')[0].style.display == 'none' || document.getElementsByClassName('img2')[0].style.display == '') {
        document.getElementsByClassName('img1')[0].style.display = 'none';
        document.getElementsByClassName('img2')[0].style.display = 'block';
        document.getElementsByClassName('btn2')[0].style.backgroundColor = '#e8f808';
        document.getElementsByClassName('img3')[0].style.display = 'none';
        document.getElementsByClassName('img4')[0].style.display = 'none';
        document.getElementsByClassName('btn1')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn2')[0].style.backgroundColor = '#e8f808';
        document.getElementsByClassName('btn3')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn4')[0].style.backgroundColor = '#f3f3f3';
    }
}
function imgBtn3() {
    if (document.getElementsByClassName('img3')[0].style.display == 'none' || document.getElementsByClassName('img3')[0].style.display == '') {
        document.getElementsByClassName('img1')[0].style.display = 'none';
        document.getElementsByClassName('img2')[0].style.display = 'none';
        document.getElementsByClassName('img3')[0].style.display = 'block';
        document.getElementsByClassName('img4')[0].style.display = 'none';
        document.getElementsByClassName('btn1')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn2')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn3')[0].style.backgroundColor = '#e8f808';
        document.getElementsByClassName('btn4')[0].style.backgroundColor = '#f3f3f3';
    }
}
function imgBtn4() {
    if (document.getElementsByClassName('img4')[0].style.display == 'none' || document.getElementsByClassName('img4')[0].style.display == '') {
        document.getElementsByClassName('img1')[0].style.display = 'none';
        document.getElementsByClassName('img2')[0].style.display = 'none';
        document.getElementsByClassName('img3')[0].style.display = 'none';
        document.getElementsByClassName('img4')[0].style.display = 'block';
        document.getElementsByClassName('btn1')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn2')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn3')[0].style.backgroundColor = '#f3f3f3';
        document.getElementsByClassName('btn4')[0].style.backgroundColor = '#e8f808';
    }
}

function hideImgs() {
    // for(var -){

    // }
}

var wheel = document.getElementsByClassName('wheel');
// var imgs = wheel.getElementsByTagName('img');
// console.log(imgs);
