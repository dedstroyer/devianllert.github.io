'use strict';


// FOR MAIN PAGE

window.onload = function() {

    document.querySelector(".header-title").classList.add('animated', 'fadeInUp');
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
        document.body.style.overflow = 'visible';
        document.querySelector(".header-title").classList.add('animated', 'fadeInUp');
        document.querySelector('.back').classList.add('animated', 'fadeInUp');
        document.querySelector('.header-logo').classList.add('animated', 'fadeInLeft');
        document.querySelector('.mnu-list').classList.add('animated', 'fadeInRight');
    }

    // Вывод подсказок
    let hint = document.querySelectorAll(".hint");


    for (let h = 0; h < hint.length; h++) {

        hint[h].onclick = function () {
            let step = this.closest(".block-title").nextElementSibling.nextElementSibling;

            step.classList.toggle("active-hint");

        };
    }

    // Функция суммы

    document.querySelector(".sum .btn").onclick = function () {

        let a = +(document.querySelector(".sum .first").value);
        let b = +(document.querySelector(".sum .second").value);
        let answer = document.querySelector(".sum .answer");
        let result;

        if (isNaN(a) || isNaN(b)) {
            alert('Введите числа в оба столбца');
        } else {
            result = a + b;
            answer.innerHTML = +result.toFixed(2);

        }

    };

    // Фукция умножеия

    document.querySelector(".multi .btn").onclick = function () {

        let a = +(document.querySelector(".multi .first").value);
        let b = +(document.querySelector(".multi .second").value);
        let answer = document.querySelector(".multi .answer");
        let result;

        if (isNaN(a) || isNaN(b)) {
            alert('Введите числа в оба столбца');
        } else {

          result = a * b;
          answer.innerHTML = +result.toFixed(2);

        }


    };

    // Функция деления

    document.querySelector(".divis .btn").onclick = function () {

        let a = +(document.querySelector(".divis .first").value);
        let b = +(document.querySelector(".divis .second").value);
        let answer = document.querySelector(".divis .answer");
        let result;

        if (isNaN(a) || isNaN(b)) {
            alert('Введите числа в оба столбца');
        } else {
            result = a / b;

            answer.innerHTML = +result.toFixed(2);

        }

    };

    // Функция возведения в степень

    document.querySelector(".pow .btn").onclick = function () {

        let a = +(document.querySelector(".pow .first").value);
        let b = +(document.querySelector(".pow .second").value);
        let answer = document.querySelector(".pow .answer");
        let result = a;

        if (isNaN(a) || isNaN(b)) {
            alert('Введите числа в оба столбца');
        } else {
            if (b > 0) {
                for (let h = b; h > 1; h--) {
                    result *= a;
                }
            } else {
              for (let h = b; h < 1; h++) {
                  result *= ((1/a));
              }

            }
            answer.innerHTML = +result.toFixed(5);
        }


    };

    // Дескриминант

    document.querySelector(".discriminant .btn").onclick = function () {
        let a = +(document.querySelector(".discriminant .first").value),
            b = +(document.querySelector(".discriminant .second").value),
            c = +(document.querySelector(".discriminant .third").value),
            answer = document.querySelector(".discriminant .answer");

        answer.innerHTML = (b*b) - 4*a*c;
    };

    // Числа Фибоначчи

    document.querySelector(".fibonacci .btn").onclick = function () {
        let a = +(document.querySelector(".fibonacci .first").value),
            answer = document.querySelector(".fibonacci .answer");

        let k = 1, j = 1;

        for (let i = 3; i <= a; i++){
            let result = k + j;
            k = j;
            j = result;

        }

        answer.innerHTML = j;
    };

    // Факториал числа

    document.querySelector(".factorial .btn").onclick = function () {
        let a = +(document.querySelector(".factorial .first").value),
            answer = document.querySelector(".factorial .answer");

        let result = a;

        for (let i = 1; i < a; i++){

            result *= (a - i);
        }

        answer.innerHTML = result;
    };

    //Счет чисел до ...

    document.querySelector(".sum-to .btn").onclick = function () {
        let a = +(document.querySelector(".sum-to .first").value),
            answer = document.querySelector(".sum-to .answer");

        let result = a;

        for (let i = 1; i < a; i++){

            result += (a - i);
        }

        answer.innerHTML = result;
    }
};
