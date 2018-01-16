'use strict';

const animatePlace = document.querySelector('.animation-place');

function animateSlide() {
  // Анимация для проектов...

  console.log(animatePlace.children);

}

function menuSlide() {

  const menuItem = document.createElement('li');
  menuItem.className = 'apps-count_list-item';



}

function animate() {

}



















// Выполнение функции один раз.
function once(fn, context) { 
  var result;

  return function() { 
      if(fn) {
          result = fn.apply(context || this, arguments);
          fn = null;
      }

      return result;
  };
}

// Пример использования
var canOnlyFireOnce = once(function() {
  console.log('Запущено!');
});

canOnlyFireOnce(); // "Запущено!"
canOnlyFireOnce(); // Не запущено