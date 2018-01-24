;
(function () {
    document.addEventListener('DOMContentLoaded', preloader);

    function preloader() {
        const loader = document.querySelector('.preloader');
        setTimeout(function () {
            loader.style.opacity = 0;
            setTimeout(function () {
                loader.remove();
            }, 500)
        }, 2500)
    }
})();