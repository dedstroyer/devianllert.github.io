'use strict';


// Preloader
function preloader() {
  const loader = document.querySelector('.preloader');
  setTimeout(function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.remove();
    }, 500) // после изменения прозрачности, через 0.5 секунд удялаем прелоадер со страницы
  }, 2200)
}

// AtomicText
function atomicText() {
  let maxlength = 20;
  function truncate(str) {
      return str.slice(0, (maxlength)) + '...';
  }
  const atomicTextInput = document.querySelector('.atomic-text_input'), // поле ввода
        atomicTextView = document.querySelector('.atomic-text_view'); // поле вывода
  let censur;

  atomicTextInput.addEventListener('input', function () { // когда в поле вносится любое значение (включая 'вставить')
    atomicTextView.textContent = atomicTextInput.value; // Вставляем значение из поля ввода в поле вывода

    censur = atomicTextInput.value.toLowerCase();

    if (~censur.indexOf('fuck') || ~censur.indexOf('shit')) { // Цензура матов
      atomicTextView.textContent = '';
      atomicTextInput.value = '';
    }

    if (atomicTextInput.value.length > maxlength) {
      atomicTextView.textContent = truncate(atomicTextInput.value)
    }
  });
}


function toggleMenu() {

  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.show-menu');

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('menu-active');
    this.classList.toggle('menu-active');
    if (this.classList.contains('menu-active')){
      menuButton.innerHTML = 'close'
    } else {
      menuButton.innerHTML = 'menu'
    }
  });

}

function animateSlide() {
  
}

window.onload = function () { // Функции выполняющиеся после загрузки страницы

  preloader();
  atomicText();
  toggleMenu();

};