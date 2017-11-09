'use strict';

window.onload = function() {

    var header_title = document.querySelector(".header-title");

    header_title.classList.add('animated', 'fadeInUp');



    function runOnKeys(func) {
        var codes = [].slice.call(arguments, 1);

        var pressed = {};

        document.onkeydown = function(e) {
            e = e || window.event;

            pressed[e.keyCode] = true;

            for (var i = 0; i < codes.length; i++) { // проверить, все ли клавиши нажаты
                if (!pressed[codes[i]]) {
                    return;
                }
            }

            // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
            // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
            // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
            pressed = {};

            func();

        };

        document.onkeyup = function(e) {
            e = e || window.event;

            delete pressed[e.keyCode];
        };

    }

    runOnKeys(
        function() {
            document.location.href = "training.html";
        },
        "D".charCodeAt(0),
        "V".charCodeAt(0),
        "N".charCodeAt(0)
    );

};