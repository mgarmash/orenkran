all_images = new Array (
    "img/slides/1.jpg",
    "img/slides/2.jpg",
    "img/slides/3.jpg",
    "img/slides/4.jpg",
    "img/slides/5.jpg",
    "img/slides/6.jpg",
    "img/slides/7.jpg",
    "img/slides/8.jpg",
    "img/slides/9.jpg",
    "img/slides/10.jpg",
    "img/slides/11.jpg",
    "img/slides/12.jpg",
    "img/slides/13.jpg");
var ImgNum = 0;
var ImgLength = all_images.length - 1;
var delay = 3000;
var lock = false;
var run;

function chgImg(direction) {
    if (document.images) {
        ImgNum = ImgNum + direction;
        if (ImgNum > ImgLength) { ImgNum = 0; }
        if (ImgNum < 0) { ImgNum = ImgLength; }
        document.slide_show.src = all_images[ImgNum];
    }
}

function auto() {
    if (lock == true) {
        lock = false;
        window.clearInterval(run);
    }
    else if (lock == false) {
        lock = true;
        run = setInterval("chgImg(1)", delay);
    }
}