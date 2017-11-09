// JavaScript Document

// jQuery
(function ($){
  $(function (){

    var $body = $('body'), $window = $(window), $footer = $('footer'), $submit_line = $('.submit-line');

    // Поиск игроков
    $('.js-search').each(function (index, element){
      var $this = $(element), $search = $this.find('[data-search-url]'), url = $search.data('search-url'), totrows = $($search.data('totrows'));
      $search.autocomplete({
        appendTo: $this,
        minLength: 3,
        select: function (request, response){
          $.ajax({
            url: url,
            dataType: "json",
            data: {
              search: request.term
            },
            success: function (data){
              console.log('select', data);
              if(totrows.length) totrows.text(data.totrows);
              response(data.results);
            }
          });
        },
        source: function (request, response){
          console.log('source');
          $.ajax({
            url: url,
            dataType: "json",
            data: {
              search: request.term
            },
            success: function (data){
              if(totrows.length) totrows.text(data.totrows);
              response(data.results);
            }
          });
        },
        search: function (event, ui){

          var data = $this.data('submit-success');
          var serialize = $this.serialize();

          console.log('search', data);
          actions(data, this, serialize);
        }
      });
    });

    // События
    $window.on('load', function (){
      load_sliders();
    });
    $window.on('load resize', function (){
      if($('.main-page').length) $('.main-page').innerHeight($window.height());
      if($('.main-page .vertical-center').length){
        $('.main-page .vertical-center').css({
          "padding-top": (($window.height() - $('.main-page .vertical-center').offset().top) - ($window.height() - $('.main-page .next').offset().top) - ($('.main-page .vertical-center').height())) / 2 + "px"
        });
      }
    });
    $window.on('load scroll', function (){
      if($window.scrollTop() > 500) $('header').addClass('active');
      else $('header').removeClass('active');

      if($submit_line.length){
        if(($window.scrollTop() + $window.height()) < $footer.offset().top) $submit_line.addClass('fixed');
        else $submit_line.removeClass('fixed');
      }
    });
    $body.on('change', '.js-submit-select select', function (){
      var $this = $(this);

      $this.parents('form').submit();
    });

    // Клик
    $body.on('click', '[data-click]', function (){
      var data = $(this).data('click');

      actions(data, this);
      if($(this).is('a')) return false
    });

    $body.on('click', '.js-check', function (){
      var $this = $(this);

      if($this.is(":not(:checked)")){
        $this.parents('form').find('[type=submit]').attr('disabled', 'disabled');
        if($this.data('check').length) $($this.data('check')).addClass('hide');
      }else{
        $this.parents('form').find('[type=submit]').removeAttr('disabled');
        if($this.data('check').length) $($this.data('check')).removeClass('hide');
      }
    });

    $body.on('mouseenter', '[data-hover]', function (){
      var $this = $(this);

      $($this.data('hover')).addClass('active');
    });
    $body.on('mouseleave', '[data-hover]', function (){
      var $this = $(this);

      $($this.data('hover')).removeClass('active');
    });

    // Закладки
    $body.on('click', '[data-tab]', function (){
      var $this = $(this);

      $this.parent().addClass('active').siblings().removeClass('active');
      $($this.data('tab')).removeClass('hide').siblings().addClass('hide');

      load_sliders();
      return false;
    });

    $body.on('change', '.js-upload', function (){
      $(this).parents('form').submit();
    });

    // Функции
    function load_sliders(){
      if($window.width() < 505){
        var $bxSlider = $('.bxSlider:visible:not(.active)');
        if($bxSlider.length){
          $bxSlider.each(function (index, element){
            var $this = $(this),
              data = $this.data('bxslider');

            if($this.hasClass('onSlide')){
              data['onSlideNext'] = function ($slideElement, oldIndex, newIndex){
                console.log('onSlide', newIndex);
                load_sliders();
              };
              data['onSlidePrev'] = function ($slideElement, oldIndex, newIndex){
                console.log('onSlide', newIndex);
                load_sliders();
              };
            }
            $(element).addClass('active').bxSlider(data);
          });
        }
      }
    }

    function select_chosen(){
      var $chosen = $(".js-chosen");
      if($chosen.length){
        $chosen.find('option[value=0]').text('');
        $chosen.chosen({
          width: "100%",
          disable_search_threshold: 10,
          no_results_text: "Нет результатов"
        });
      }
    }

    select_chosen();

    // Маски
    function mask(){
      $("[data-mask=phone]").mask("+7(999) 999-9999");
    }

    mask();

    // Действия
    function actions(data, $this, serialize){

      for(var selector in data){
        var $selector = $(selector);

        if(data[selector].class) $selector.toggleClass(data[selector].class);
        if(data[selector].removeClass) $selector.removeClass(data[selector].removeClass);
        if(data[selector].addClass) $selector.addClass(data[selector].addClass);
        if(data[selector].click == 'true') $selector.click();
        if(data[selector].text) $selector.text(data[selector].text);
        if(data[selector].remove) $selector.remove();
        if(data[selector].attr) $selector.attr(data[selector].attr);
        if(data[selector].removeAttr) $selector.removeAttr(data[selector].removeAttr);
        if(data[selector].bxslider) $selector.removeAttr(data[selector].bxslider);
        if(data[selector].alignTop) $(selector).css({
          "margin-top": ($window.height() - $(selector).innerHeight()) / 2 + "px"
        });
        if(data[selector].poscursor) $(selector).css({
          "top": $($this).offset().top + $($this).outerHeight() / 2 - $(selector).height() / 2 + "px",
          "left": $($this).offset().left + $($this).outerWidth() + 40 + "px"
        });
        if(data[selector].toggle){
          switch(data[selector].toggle){
            case 'slide':
              $selector.slideToggle('fast');
              break;
            case 'slideUp':
              $selector.slideUp('fast');
              break;
            case 'slideDown':
              $selector.slideDown('fast');
              break;
            case 'fade':
              $selector.fadeToggle('fast');
              break;
            case 'fadeIn':
              $selector.fadeIn('fast');
              break;
            case 'fadeOut':
              $selector.fadeOut('fast');
              break;
          }
        }
        if(data[selector].scroll){
          var offset = $selector.offset().top;
          if(data[selector].scroll != 'true') offset = $selector.offset().top - parseInt(data[selector].scroll);
          $('body, html').animate({scrollTop: offset});
        }
        if(data[selector].ajax){
          var url = (data[selector].ajax.url ? data[selector].ajax.url : $($this).attr('href'));
          if(serialize) url = url + '?' + serialize;

          $.ajax({
            url: url,
            async: false,
            type: (data[selector].ajax.type ? data[selector].ajax.type : 'GET'),
            data: data[selector].ajax.data ? data[selector].ajax.data : {isNaked: 1},
            success: function (response){
              var resp;

              if(data[selector].ajax.response) resp = $(response).find(data[selector].ajax.response);
              else resp = response;

              if(data[selector].ajax.selector == 'this') $selector.html(resp);
              else{
                if($(data[selector].ajax.selector).length) $(data[selector].ajax.selector).html(resp);
              }

              form_validate();
              mask();
              select_chosen();
            }
          })
        }
      }
    }

    // Проверка форм
    function form_validate(){
      $('form.validate:not(.active)').each(function (index, element){
        var array = {warnText: null, response: null},
          data = $(element).data('submit'),
          dataSuccess = $(element).data('submit-success');

        array = $(element).data('array') || array;
        $(element).addClass('active').validate({
          // Форма заполнена не верно
          invalidHandler: function (){
            $(element).ajaxSubmit({
              data: {isNaked: 1},
              success: function (response, status, xhr, Form){
                var
                  warnText = $(response).filter('.warnText'),
                  all = $(response);

                if(warnText.length && warnText.length != 'false'){
                  if(array.warnText != null) $(array.warnText).html(warnText);
                  else $(Form).find('.warnText').html(warnText);
                }else{
                  if(array.warnText != null) $(array.warnText).html(all);
                  else $(Form).find('.warnText').html(all);
                }
                actions(data);
              }
            })
          },
          // Форма заполнена верно
          submitHandler: function (form){
            var $this_form = $(form), $submit = $this_form.find('[type=submit]');
            $submit.attr({'disabled': 'disabled', 'title': $submit.text()}).text('Идет загрузка…');

            if(array.ajax != 'false'){
              $(form).ajaxSubmit({
                data: {isNaked: 1},
                success: function (response, status, xhr, Form){
                  var
                    resp = ($(response).filter('.response').length ? $(response).filter('.response') : $(response).find('.response')),
                    warnText = ($(response).filter('#nc_modal_status').length ? $(response).filter('#nc_modal_status') : $(response).find('#nc_modal_status')),
                    all = $(response);

                  if(warnText.length){
                    if(warnText.length && warnText.length != 'false'){
                      if(array.warnText != null) $(array.warnText).html(warnText);
                      else $(Form).find('.warnText').html(warnText);
                    }else{
                      if(array.warnText != null) $(array.warnText).html(all);
                      else $(Form).find('.warnText').html(all);
                    }
                  }else{
                    if(resp.length && resp.length != 'false'){
                      if(array.response) $(array.response).html(resp);
                      else $(Form).closest('div').html(resp);
                    }else{
                      if(array.response) $(array.response).html(all);
                      else $(Form).find('div').html(all);
                    }
                  }
                  $submit.removeAttr('disabled').text($submit.attr('title'));

                  actions(dataSuccess);
                  actions(data);
                  form_validate();
                  mask();
                  select_chosen();
                }
              })
            }
          }
        })
      });
    }

    form_validate();

  });
})(jQuery);