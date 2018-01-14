'use strict';

// AtomicText

const atomicTextInput = document.querySelector('.atomic-text_input'), // поле ввода
			atomicTextView = document.querySelector('.atomic-text_view'); // поле вывода
			
function atomic() {
  
  function truncate(str) {
    let maxlength = 20;
    return str.slice(0, (maxlength)) + '...';
	}
	
	atomicTextView.textContent = atomicTextInput.value;
	
}

function animateSlide() {
  // Анимация для проектов...
}

window.onload = function () { // Функции выполняющиеся после загрузки страницы

  atomicTextInput.addEventListener('input', atomic);

};


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