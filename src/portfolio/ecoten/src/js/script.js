$(document).ready(function () {

    $('#m-menu').click(function () {
        $(this).toggleClass('open');
        $('.main-menu').slideToggle(300);
    });

// $('.main-slider.cat').slick({
//     dots: false,
//     speed: 500,
//     fade: true,
//     cssEase: 'ease',
//     rtl: false,
//     responsive: [{
//         breakpoint: 1199,
//         settings:{
//             arrows: false
//         }
//     }]
// });

    $('.main_slider_sp').sliderPro({
        width: '100%',
        height: 700,
        orientation: 'vertical',
        loop: false,
        arrows: true,
        buttons: false,
        thumbnailsPosition: 'left',
        thumbnailPointer: true,
        thumbnailWidth: 370,
        thumbnailHeight: 137,
        autoplay: false,
        breakpoints: {
            800: {
                thumbnailsPosition: 'left',
                thumbnailWidth: 200
            },
            500: {}
        }
    });

    if ($(window).width() < 540) {
        $('.main_slider_sp').sliderPro('destroy')
    }

});

// $('.single-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     fade: true,
//     asNavFor: '.single-slider-nav'
// });
// $('.single-slider-nav').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.single-slider',
//     dots: false,
//     focusOnSelect: true
// });
