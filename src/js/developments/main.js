'use strict';


// AtomicText
function atomicText() {
  let maxlength = 20;
  function truncate(str) {
      return str.slice(0, (maxlength)) + '...';
  }
  const atomicTextInput = document.querySelector('.atomic-text_input'), // поле ввода
        atomicTextView = document.querySelector('.atomic-text_view'); // поле вывода
  let censur;

  atomicTextInput.addEventListener('input', function () { // когда в поле вносится любое значение(включая функцию контекстного меню 'вставить')
    atomicTextView.textContent = atomicTextInput.value; // Вставляем значение из поля ввода в поле вывода

    censur = atomicTextInput.value.toLowerCase();

    if (~censur.indexOf('fuck') || ~censur.indexOf('shit')) { // Цензура матов (Проба)
      atomicTextView.textContent = '';
      atomicTextInput.value = '';
    }

    if (atomicTextInput.value.length > maxlength) { // Если количество симолов больше, чем допустимое значение
      atomicTextView.textContent = truncate(atomicTextInput.value) // вставляем в текстовое поле текст, полученный с помощью функции
    }
  });
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.show-menu');

function toggleMenu() {
    menu.classList.toggle('menu-active');
    this.classList.toggle('menu-active');

    if (this.classList.contains('menu-active')){
      menuButton.innerHTML = 'close'
    } else {
      menuButton.innerHTML = 'menu'
    }
}

function animateSlide() {
  
}

window.onload = function () { // Функции выполняющиеся после загрузки страницы

  atomicText();
  menuButton.addEventListener('click', toggleMenu);

};