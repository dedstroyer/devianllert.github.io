'use strict';

const mainLink = document.querySelectorAll('.main-mnu-item a');
const headerToggle = document.querySelector('.header-toggle')

for (let i = 0; i < mainLink.length; i++) {
    mainLink[i].addEventListener('click', switchMenu)
}

headerToggle.addEventListener('click', panelToggle);

function switchMenu(event) {
    event.preventDefault();

    if (!(this.classList.contains('active-link'))) {
        for (let i = 0; i < mainLink.length; i++) {
            mainLink[i].parentNode.classList.remove('active-link');
        }
    }

    this.parentNode.classList.add('active-link');
}


function panelToggle() {
    document.querySelector('.main').classList.toggle('header-on');
}