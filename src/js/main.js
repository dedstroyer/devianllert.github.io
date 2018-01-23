'use strict';
// переходы между страницами
const mainLink = document.querySelectorAll('.main-mnu-item a');
// боковая панель
const headerToggle = document.querySelector('.header-toggle');

const header = document.querySelector('.header');

mainLink.forEach(function(el) { // forEach вместо обычного цикла for
    el.addEventListener('click', switchMenu);
})

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
    header.classList.toggle('header-on');
    document.body.classList.toggle('header-overflow');

    if(header.classList.contains('header-on')) {
        headerToggle.querySelector('i').classList.remove('fa-bars');
        headerToggle.querySelector('i').classList.add('fa-times');
    } else {
        headerToggle.querySelector('i').classList.remove('fa-times');
        headerToggle.querySelector('i').classList.add('fa-bars');
    }
}

document.addEventListener('click', function(event) {
    if(!event.target.closest('.header')) {
        header.classList.remove('header-on');
        document.body.classList.remove('header-overflow');

        headerToggle.querySelector('i').classList.remove('fa-times');
        headerToggle.querySelector('i').classList.add('fa-bars');
    }
})