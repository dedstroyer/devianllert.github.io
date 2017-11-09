$(document).ready(function () {

    $('.config-price').on('click', function () {
        $('.config-price-modal__wrap').addClass('config-price-modal__wrap--is_active');
    });

    $('.close-modal').on('click', function () {
        $(this).closest('.config-price-modal__wrap').removeClass('config-price-modal__wrap--is_active');
    });

    $('.gallery-fancybox').fancybox();

});