'use strict';

window.onload = function () {

    // Функция суммы
    var sumButton = document.querySelector(".sum-btn");

    sumButton.onclick = function () {

        var first = parseInt(document.querySelector(".sum-one").value);
        var second = parseInt(document.querySelector(".sum-two").value);
        var answer = document.querySelector(".sum-answer");

        if (isNaN(first) || isNaN(second)) {
            alert('Введите числа в оба столбца');
        } else {
            answer.innerHTML = first + second;
        }

    };

    // Вывод подсказок
    var hint = document.querySelectorAll(".hint");


    for (var h = 0; h < hint.length; h++) {

        hint[h].onclick = function () {
        var step = this.closest(".block-title").nextElementSibling.nextElementSibling;

        step.classList.toggle("active-hint");

        };
    }

    // Фукция умножеия
    var multi = document.querySelector(".multi-btn");

    multi.onclick = function () {

        var first = parseInt(document.querySelector(".multi-one").value);
        var second = parseInt(document.querySelector(".multi-two").value);
        var answer = document.querySelector(".multi-answer");

        if (isNaN(first) || isNaN(second)) {
            alert('Введите числа в оба столбца');
        } else {
            answer.innerHTML = first * second;
        }


    };

    // Функция деления
    var divis = document.querySelector(".divis-btn");

    divis.onclick = function () {

        var first = parseInt(document.querySelector(".divis-one").value);
        var second = parseInt(document.querySelector(".divis-two").value);
        var answer = document.querySelector(".divis-answer");

        if (isNaN(first) || isNaN(second)) {
            alert('Введите числа в оба столбца');
        } else {
            answer.innerHTML = first / second;
        }

    };

    var pow = document.querySelector(".pow-btn");

    pow.onclick = function () {

        var first = parseInt(document.querySelector(".pow-one").value);
        var second = parseInt(document.querySelector(".pow-two").value);
        var answer = document.querySelector(".pow-answer");
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


    }

};