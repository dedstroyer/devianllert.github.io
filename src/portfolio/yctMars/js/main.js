$(document).ready(function () {


        $('.package-tabs').each(function () {
            $(this).find('li').each(function (i) {
                $(this).on('click', this, function () {
                    $(this).addClass('active-package').siblings().removeClass('active-package')
                        .closest('.nyear-package').find('.package-tabs-list').removeClass('active-package-list').eq(i).addClass('active-package-list');
                });
            });
        });

        $('.next-arrow').on('click', function () {
            nextSlide();

            indexer.each(function () {
                indexer.siblings().removeClass('active-anch');
                indexer.eq(slideNow - 1).addClass('active-anch');
            });
        });

        $('.prev-arrow').on('click', function () {
            prevSlide();

            indexer.each(function () {
                indexer.siblings().removeClass('active-anch');
                indexer.eq(slideNow - 1).addClass('active-anch');
            });
        });

        $(".next-last-arrow").on('click', function () {
            nextLastSlide();
            indexer.each(function () {
                indexer.siblings().removeClass('active-anch');
                indexer.eq(slideNow - 1).addClass('active-anch');
            });

        });

        $(".prev-last-arrow").on('click', function () {
            prevFirstSlide();
            indexer.each(function () {
                indexer.siblings().removeClass('active-anch');
                indexer.eq(slideNow - 1).addClass('active-anch');
            });

        });


        var indexer = $('.pagination');
        var sliderWrapper = $('.event-slider');
        var slideNow = 1;
        var slideCount = sliderWrapper.children().length;
        var translateWidth = 0;
        var navBtnId = 0;


        indexer.click(function () {

            navBtnId = $(this).index();

            $(this).addClass('active-anch');
            $(this).siblings().removeClass('active-anch');

            if (navBtnId + 1 != slideNow) {
                translateWidth = -$('.event-wrapper-slider').width() * (navBtnId);
                sliderWrapper.css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
                });

                slideNow = navBtnId + 1;

            }
        });


        function nextSlide() {

            if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
                sliderWrapper.css('transform', 'translate(0, 0)');
                slideNow = 1;
            } else {
                translateWidth = -$('.event-wrapper-slider').width() * (slideNow);
                sliderWrapper.css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
                });

                slideNow++;

            }
        }

        function nextLastSlide() {
            slideNow = slideCount;
            translateWidth = -$('.event-wrapper-slider').width() * (slideNow - 1);
            sliderWrapper.css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
            });
        }

        function prevSlide() {
            if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
                translateWidth = -$('.event-wrapper-slider').width() * (slideCount - 1);
                sliderWrapper.css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });

                slideNow = slideCount;

            } else {
                translateWidth = -$('.event-wrapper-slider').width() * (slideNow - 2);
                sliderWrapper.css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
                });

                slideNow--;

            }
        }

        function prevFirstSlide() {
            slideNow = 1;
            translateWidth = -$('.event-wrapper-slider').width() * (slideNow - 1);
            sliderWrapper.css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
            });
        }

        $(".missionToMars").on('click', this, function () {
            $('html, body').animate({
                scrollTop: $("#missionToMars").offset().top
            }, 1000);
        });

        $(".hours").on('click', this, function () {
            $('html, body').animate({
                scrollTop: $("#hours").offset().top
            }, 1000);
        });

        $(".marsWinter").on('click', this, function () {
            $('html, body').animate({
                scrollTop: $("#marsWinter").offset().top
            }, 1000);
        });

    }
)
;