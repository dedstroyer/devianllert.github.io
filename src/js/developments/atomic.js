;
const atomic = (document => {

    const atomicTextInput = document.querySelector('.atomic-text_input'), // поле ввода
        atomicTextView = document.querySelector('.atomic-text_view'); // поле вывода

    function liveReloadText() {

        function truncate(str) {
            let maxlength = 20;
            return str.slice(0, (maxlength)) + '...';
        }

        atomicTextView.textContent = atomicTextInput.value;

    }

    function init() {
        atomicTextInput.addEventListener('input', liveReloadText);
    }

    return init;

})(document);

atomic();