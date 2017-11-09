$(document).ready(function() {

	$(".main-slider").owlCarousel({
		items: 1,
		navText: ["<img src='../img/arrowl.svg'>","<img src='../img/arrowr.svg'>" ],
		dots: true,
		nav:true
	});

	$(".sponsors-list").owlCarousel({
		dots: false,
		nav: true,
        navText: ["<img src='../img/arrowlspons.svg'>","<img src='../img/arrowrspons.svg'>" ],
		margin: 15,
		responsive: {
			0: {
				items:2
			},
			768: {
				items: 6
			}
		}
	});

    $('[data-modal]').click(function (e) {
        e.preventDefault();
        $('.popup').removeClass('active-popup');
        $('[data-role="' + $(this).attr('data-modal') + '"]').addClass('active-popup');
		$('body').css({'overflow': 'hidden'})
    });

    $('.popup-close').click(function () {
        $('[data-role]').removeClass('active-popup');
        $('body').css('overflow', 'auto')
    });


    $('.rating-config-btn').each(function (i) {
            $(this).on('click', function () {
                $(this).addClass('config--active')
					.siblings()
					.removeClass('config--active')
                    .closest('.rating')
					.find('.rating-gamer-list')
					.removeClass('active-list')
					.eq(i)
					.addClass('active-list');


            });
    });
    $('.event-config-btn').each(function (i) {
        $(this).on('click', this, function () {
            $(this).addClass('config--active')
                .siblings()
                .removeClass('config--active')
                .closest('.event')
                .find('.event-info')
                .removeClass('active-list')
                .eq(i)
                .addClass('active-list');
        });
    });

    $('#tel').mask("+7 (999) 999-99-99");

    $('.advantage-item').each(function (i) {
        $(this).on('click', this, function () {
            $(this).addClass('advantage-active')
                .siblings()
                .removeClass('advantage-active')
                .closest('.advantage')
                .find('.advantage-info')
                .removeClass('active-list')
                .eq(i)
                .addClass('active-list');
        });
    });

    $('.rating-config-level').select2();
    $('.event-config-select').select2();

	$('.header-top-mnu--visibility-hidden').click(function () {
		$('.header-top-mnu').slideToggle();
    })
});


$(document).ready(function(){
    $(document).on('mouseup', function(event){
        // Объект выпадающего меню
        var $dropdown = $('#header-search');
        // Клик по управляющей конструкции или по его дочерним элементам
        if ($dropdown.is(event.target) || $dropdown.has(event.target).length > 0) {
            return;
        }
        // Сокрытие выпадающего меню
        $('#header-search').addClass('hide');
        // Вывод обратно кнопки поиска
        $('#header-search-link').removeClass('hide');
    });
});