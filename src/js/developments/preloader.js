;(function () {
  window.addEventListener('load', preloader);

  function preloader() {
    const loader = document.querySelector('.preloader');
    setTimeout(function () {
      loader.style.opacity = 0;
      setTimeout(function () {
        loader.remove();
      }, 500) // после изменения прозрачности, через 0.5 секунд удялаем прелоадер со страницы
    }, 2500)
  }
})();
