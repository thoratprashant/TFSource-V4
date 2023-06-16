// For Fixed header (Start here) 
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
        } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        // remove padding top from body
        document.body.style.paddingTop = '0';
        }
    });
}); 
// For Fixed header (End here)

$(document).ready(function(){
    $('#bestSellerSlider').slick({
        slidesToShow: 6,
        infinite: false, 
        slidesToScroll: 6,
        // slidesToScroll: 1,
        // autoplay: false,
        // autoplaySpeed: 1500,
        arrows: true,
        // dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});