'use strict';


// FOR MAIN PAGE

window.onload = function() {

    var header_title = document.querySelector(".header-title");

    header_title.classList.add('animated', 'fadeInUp');
    document.querySelector('.back').classList.add('animated', 'fadeInUp');
    document.querySelector('.header-logo').classList.add('animated', 'fadeInLeft');
    document.querySelector('.mnu-list').classList.add('animated', 'fadeInRight');

};

// FOR TRAINING PAGE

window.onload = function () {

    if (!!document.querySelector('#preloader')) {
        setTimeout(function () {
            document.body.style.overflow = 'visible';
            document.querySelector('#preloader').style.opacity = '0';
            document.querySelector(".header-title").classList.add('animated', 'fadeInUp');
            document.querySelector('.back').classList.add('animated', 'fadeInUp');
            document.querySelector('.header-logo').classList.add('animated', 'fadeInLeft');
            document.querySelector('.mnu-list').classList.add('animated', 'fadeInRight');
        }, 2000);
        setTimeout(function () {
            document.querySelector('#preloader').style.display = 'none';
            console.log('Прелоадер сработал');
        }, 2500);
    } else {
        document.querySelector(".header-title").classList.add('animated', 'fadeInUp');
        document.querySelector('.back').classList.add('animated', 'fadeInUp');
        document.querySelector('.header-logo').classList.add('animated', 'fadeInLeft');
        document.querySelector('.mnu-list').classList.add('animated', 'fadeInRight');
    }

    // Вывод подсказок
    var hint = document.querySelectorAll(".hint");


    for (var h = 0; h < hint.length; h++) {

        hint[h].onclick = function () {
            var step = this.closest(".block-title").nextElementSibling.nextElementSibling;

            step.classList.toggle("active-hint");

        };
    }

    // Функция суммы

    document.querySelector(".sum .btn").onclick = function () {

        var first = +(document.querySelector(".sum .first").value);
        var second = +(document.querySelector(".sum .second").value);
        var answer = document.querySelector(".sum .answer");

        if (isNaN(first) || isNaN(second)) {
            alert('Введите числа в оба столбца');
        } else {
            answer.innerHTML = first + second;
        }

    };

    // Фукция умножеия

    document.querySelector(".multi .btn").onclick = function () {

        var first = +(document.querySelector(".multi .first").value);
        var second = +(document.querySelector(".multi .second").value);
        var answer = document.querySelector(".multi .answer");

        if (isNaN(first) || isNaN(second)) {
            alert('Введите числа в оба столбца');
        } else {
            answer.innerHTML = first * second;
        }


    };

    // Функция деления

    document.querySelector(".divis .btn").onclick = function () {

        var first = +(document.querySelector(".divis .first").value);
        var second = +(document.querySelector(".divis .second").value);
        var answer = document.querySelector(".divis .answer");

        if (isNaN(first) || isNaN(second)) {
            alert('Введите числа в оба столбца');
        } else {
            answer.innerHTML = (first / second);
        }

    };

    // Функция возведения в степень

    document.querySelector(".pow .btn").onclick = function () {

        var first = +(document.querySelector(".pow .first").value);
        var second = +(document.querySelector(".pow .second").value);
        var answer = document.querySelector(".pow .answer");
        var result = first;

        if (isNaN(first) || isNaN(second)) {
            alert('Введите числа в оба столбца');
        } else {
            if (second > 0) {
                for (var h = second; h > 1; h--) {
                    result *= first;
                }
            } else {

                result = -((1/first) / second);

            }
            answer.innerHTML = result;
        }


    };

};