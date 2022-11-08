// Declarando variáveis
var btnContact = document.querySelector('.jk-btn-contact')
var toggleModal = document.querySelectorAll('.jk-toggle-modal')
var toggleMenu = document.querySelectorAll('.jk-toggle-menu')
var menuMobile = document.querySelector('.jk-menu-mob')
var overlay = document.querySelector('.jk-overlay')
var btnMenuMobIcon = document.querySelector('.jk-btn-menu-mob ion-icon')



// Page Preloader
window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.jk-preloader')
    pagePreloader.classList.add('jk-fade-out')
    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000)


})


// Abrindo e fechando informações de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jk-contact-info')
    boxContact.classList.toggle('jk-is-open')
    this.classList.toggle('jk-change-icon')
})

// Abrindo e Fechando Menu Mobile
for (var m = 0; toggleMenu.length > m; m++) {
    toggleMenu[m].addEventListener('click', function () {
        var overlay = document.querySelector('.jk-menu-overlay')
        overlay.classList.toggle('jk-is-open')
        menuMobile.classList.toggle('jk-menu-is-closed')
        menuMobile.classList.toggle('jk-menu-is-open')

        var icon = btnMenuMobIcon.getAttribute('name')
        if (icon === 'menu') {
            btnMenuMobIcon.setAttribute('name', 'close')
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu')
        }

    })
}


/* Abrindo e fechando Modal de orçamento */

for (var i = 0; toggleModal.length > i; i++) {
    toggleModal[i].addEventListener('click', function () {
        var modalOrcamento = document.querySelector('#jk-modal-orcamento')
        var overlay = document.querySelector('.jk-overlay')

        overlay.classList.toggle('jk-is-open')
        modalOrcamento.classList.toggle('jk-is-open')
        modalOrcamento.classList.toggle('jk-slide-top-in')
    })
}

// Animando Elementos da Topbar
var triggerTopbar = document.querySelector('.jk-trigger-topbar');
var topbar = document.querySelector('.jk-topbar');
var logo = document.querySelector('.jk-logo');
var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function () {
        topbar.classList.toggle('jk-topbar-bg');
        logo.classList.toggle('jk-logo-shorten');
        logo.classList.toggle('jk-logo-big');
    },
    offset: '50px'
});






