//СЛАЙДЕРЫ НА ГЛАВНОЙ СТРАНИЦЫ
$(document).ready(function () {

    $(".top-slider").owlCarousel({
        autoplay: true,
        autoHoverPause: true,
        items: 1,
        mouseDrag: false
    });

    $(".content-brands-list").owlCarousel({
        autoplay: true,
        autoHoverPause: true,
        items: 6,
        nav: true,
        dots: false,
        navText: "",
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 4
            },
            1367: {
                items: 5
            },
            1601: {
                items: 6
            }
        }
    });

    $(".popular-goods-slider").owlCarousel({
        items: 7,
        mouseDrag: false,
        autoplay: true,
        autoHoverPause: true,
        autoplayTimeout: 11000,
        responsive: {
            0: {
                items: 4,
                margin: 20
            },
            1367: {
                items: 5,
                margin: 20

            },
            1601: {
                items: 7,
                margin: 20
            }
        }
    });

    $(".massive-sale-slider").owlCarousel({
        autoplay: true,
        items: 1,
        mouseDrag: false,
        autoHoverPause: true,
        autoplayTimeout: 7000,
        margin: 30
    });

    $('.category-item-chosen-goods').owlCarousel({
        items: 4,
        mouseDrag: false,
        margin: 30,
        nav: true,
        navText: ""
    })

});


//ПЕРЕКЛЮЧАТЕЛИ  СЛАЙДЕРОВ
$(document).ready(function () {

    //Меню в каталоге
    $(".category-list-item").click(function () {
        $(this).children(".subcategory-list").slideToggle();
    });

    //СЛАЙДЕР РАСПРОДАЖ

    $('.massive-sale-percent-list').each(function () {

        $(this).find('.massive-sale-percent-item').each(function (i) {

            $(this).click(function () {

                $(this).addClass('active-percent').siblings().removeClass('active-percent')

                .closest('.content-massive-sale').find('.massive-sale-slider').removeClass('active-massive-slider').eq(i).addClass('active-massive-slider')

            });

        });

    });

    $('.popular-goods-head-list').each(function () {

        $(this).find('.popular-goods-list-item').each(function (i) {

            $(this).click(function () {

                $(this).addClass('active-goods').siblings().removeClass('active-goods')

                    .closest('.content-popular-goods').find('.popular-goods-slider').removeClass('active-slider').eq(i).addClass('active-slider');

            });

        });

    });

});

// Прогресс бар товаров на главной странице
$(document).ready(function () {

    function progressGood() {

        $(".progress-count-goods").each(function () {

            var $block = $(this).closest(".mainblock-count-goods");
            var haveGood = +($block.find("[data-good='have']").text());
            var soldGood = +($block.find("[data-good='sold']").text());

            if (isNaN(haveGood) || isNaN(soldGood)) {
                console.warn("Неверное значение в html коде", {
                    "[data-good='have']": $block.find("[data-good='have']").text(),
                    "[data-good='sold']": $block.find("[data-good='sold']").text()
                });
                return true;
            }

            var allCount = haveGood + soldGood;
            var percent = +((haveGood / allCount) * 100);

            $(this).find(".progress-bar").css("width", percent + "%");

        });
    }

    progressGood();

});

//меню каталога товаров
$(document).ready(function () {
    $(".catalog .btn-catalog").click(function () {
        $(this).toggleClass('btn-catalog-active');
        $(this).siblings().toggleClass("active-catalog-btn")
    })
});

//Таймер товара на главной странице
$(document).ready(function () {

        var $element = $(".time-countdown");



        $element.each(function () {

            var $cc = $(this).closest(".mainblock-time");

            var a = $(this).attr("data-date-current");
            var b = $(this).attr("data-date-end");

            var distance = new Date(b).getTime() - new Date(a).getTime();

            var tick = setInterval(function () {

                // Ищем разницу во времени между указанным в дата-аттрибуте и настоящим
                distance -= 1000;
                // Высчитываем дни, часы, минуты, секунды
                var days = Math.floor((distance) / (1000 * 60 * 60 * 24));
                var hours = Math.floor(((distance) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor(((distance) % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor(((distance) % (1000 * 60)) / 1000);

                $cc.find(".day").text(days);
                $cc.find(".hour").text(hours);
                $cc.find(".minutes").text(minutes);
                $cc.find(".seconds").text(seconds);

                if (distance < 0) {
                    clearInterval(tick);
                    $cc.find('.time-countdown').append();
                }
            }, 1000);

        });

});

$(document).ready(function () {

    $('.item-rating').each(function () {
        $(this).rating('disable')
    });


    var $range_from = $('.filter-input__from');
    var $range_to = $('.filter-input__to');
    var range_instanse_1;

    var track = function () {
        
    };

    $('.io-slider').ionRangeSlider({
        type: 'double',
        hide_min_max: true,
        hide_from_to: true,
        min: 0,
        max: 5000,
        from: 80,
        to: 3287,
        step: 100,
    });
    range_instance_1 = $range1.data("ionRangeSlider");

});


