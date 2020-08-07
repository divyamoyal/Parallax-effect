document.addEventListener('DOMContentLoaded', function() {
    // document ready
    setTimeout(bannerAnimation(), 500);
    }, false);

    // adding class active to animate banner's inner elements
    var slideIndex = 0;
    function bannerAnimation () {
        var bannerArr = document.getElementsByClassName('banner');
            removeClassOnSlide(bannerArr);
            slideIndex++;
            if (slideIndex > bannerArr.length) {slideIndex = 1}
            addClassOnCurrentSlide(bannerArr);
            setTimeout(bannerAnimation, 6000);
    }
    function removeClassOnSlide(classArr) {
        for (var i = 0; i < classArr.length; i++) {
            classArr[i].className = classArr[i].className.replace(" active", " ");
        }
    }
    function addClassOnCurrentSlide(classArr) {
            classArr[slideIndex-1].className += " active";
    }
  

