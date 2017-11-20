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
            document.body.style.marginRight = '0';
            document.querySelector('#preloader').style.opacity = '0';
            document.querySelector('#loader').style.marginRight = '0';
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

        var a = +(document.querySelector(".sum .first").value);
        var b = +(document.querySelector(".sum .second").value);
        var answer = document.querySelector(".sum .answer");

        if (isNaN(a) || isNaN(b)) {
            alert('Введите числа в оба столбца');
        } else {
            answer.innerHTML = a + b;
        }

    };

    // Фукция умножеия

    document.querySelector(".multi .btn").onclick = function () {

        var a = +(document.querySelector(".multi .first").value);
        var b = +(document.querySelector(".multi .second").value);
        var answer = document.querySelector(".multi .answer");

        if (isNaN(a) || isNaN(b)) {
            alert('Введите числа в оба столбца');
        } else {
            answer.innerHTML = a * b;
        }


    };

    // Функция деления

    document.querySelector(".divis .btn").onclick = function () {

        var a = +(document.querySelector(".divis .first").value);
        var b = +(document.querySelector(".divis .second").value);
        var answer = document.querySelector(".divis .answer");

        if (isNaN(a) || isNaN(b)) {
            alert('Введите числа в оба столбца');
        } else {
            answer.innerHTML = (a / b);
        }

    };

    // Функция возведения в степень

    document.querySelector(".pow .btn").onclick = function () {

        var a = +(document.querySelector(".pow .first").value);
        var b = +(document.querySelector(".pow .second").value);
        var answer = document.querySelector(".pow .answer");
        var result = a;

        if (isNaN(a) || isNaN(b)) {
            alert('Введите числа в оба столбца');
        } else {
            if (b > 0) {
                for (var h = b; h > 1; h--) {
                    result *= a;
                }
            } else {

                result = -((1/a) / b);

            }
            answer.innerHTML = result;
        }


    };

    // Дескриминант

    document.querySelector(".discriminant .btn").onclick = function () {
        var a = +(document.querySelector(".discriminant .first").value),
            b = +(document.querySelector(".discriminant .second").value),
            c = +(document.querySelector(".discriminant .third").value),
            answer = document.querySelector(".discriminant .answer");

        answer.innerHTML = (b*b) - 4*a*c;
    };

    //Числа Фибоначчи

    document.querySelector(".fibonacci .btn").onclick = function () {
        var a = +(document.querySelector(".fibonacci .first").value),
            answer = document.querySelector(".fibonacci .answer");

        var k = 1, j = 1;

        for (var i = 3; i <= a; i++){
            var result = k + j;
            k = j;
            j = result;

        }

        answer.innerHTML = j;
    };

    document.querySelector(".factorial .btn").onclick = function () {
        var a = +(document.querySelector(".factorial .first").value),
            answer = document.querySelector(".factorial .answer");

        var result = a;

        for (var i = 1; i < a; i++){

            result *= (a - i);
        }

        answer.innerHTML = result;
    };

    document.querySelector(".sum-to .btn").onclick = function () {
        var a = +(document.querySelector(".sum-to .first").value),
            answer = document.querySelector(".sum-to .answer");

        var result = a;

        for (var i = 1; i < a; i++){

            result += (a - i);
        }

        answer.innerHTML = result;
    }
};