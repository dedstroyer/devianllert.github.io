'use strict';
// переходы между страницами
const mainLink = document.querySelectorAll('.main-mnu-item a'),
      headerToggle = document.querySelector('.header-toggle'),
      header = document.querySelector('.header'),
      glitch = document.querySelector('.title'),
      pages = document.querySelectorAll('.content-slide');

setTimeout(function() { // remove glitch effect after 4 seconds
    glitch.classList.remove('glitch-effect');
}, 4500);

mainLink.forEach(function(element, index) { // forEach вместо обычного цикла for
    element.addEventListener('click', function() {
        event.preventDefault();

        if (!(this.parentNode.classList.contains('active-link'))) {
            for (let i = 0; i < mainLink.length; i++) {
                mainLink[i].parentNode.classList.remove('active-link');
                pages[i].classList.remove('page-on');
            }
        }

        this.parentNode.classList.add('active-link');
        pages[index].classList.add('page-on'); // index - номер страницы
        panelToggle();
    })
});

headerToggle.addEventListener('click', panelToggle);

// function switchMenu(event) {
    
// }

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