// PORTFOLIO SLIDER

// Declarando variáveis do slider
var sliderContainer = document.querySelector('.jk-slider-container')
var sliderList = document.querySelector('.jk-slider-list')
var sliderItem = document.querySelectorAll('.jk-portfolio-item')
const sliderTotalItems = sliderItem.length
var sliderListWidth = null;
var prevItem = document.querySelector('.jk-item-prev')
var nextItem = document.querySelector('.jk-item-next')
var sliderPos = 0;
var currentSlide = document.querySelector('.jk-current-slide')
var totalSlide = document.querySelector('.jk-total-slide')
var currentCounter = 1;
var navItems = document.querySelectorAll('.jk-item-navigator a')
var navCounter = document.querySelector('.jk-navigator-counter span')

// Capturando larguras individuais
if (window.innerWidth < 992) {
    var containerWidth = sliderContainer.parentElement.offsetWidth - 30;
} else {
    var containerWidth = sliderContainer.parentElement.offsetWidth;
}



// Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px'

for (var p = 0; sliderItem.length > p; p++) {
    sliderItem[p].style.width = containerWidth + 'px'

    var sliderItemWidth = sliderItem[p].offsetWidth

    sliderListWidth += sliderItemWidth
}

sliderList.style.width = sliderListWidth + 'px'


// HANDLERS


// Next Slide Animação
var nextSlideAnim = function () {
    var lastItem = sliderListWidth - containerWidth;
    if ((-1 * (sliderPos) === lastItem)) {
        return;
    }

    sliderPos -= containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

// Prev Slide Animação
var prevSlideAnim = function () {

    if (sliderPos === 0) {
        return;
    }

    sliderPos += containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}
// Counter Formatter
var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n
    } else {
        return n;
    }
}

//Counter Add
var counterAdd = function () {
    if (currentCounter >= 0 && currentCounter < sliderTotalItems) {
        currentCounter++;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Counter Remove
var counterRemove = function () {
    if (currentCounter > 1 && currentCounter <= sliderTotalItems) {
        currentCounter--;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Set Active Nav
var setActiveNav = function () {
    for (var nv = 0; navItems.length > nv; nv++) {
        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));

        if (myNavNum === currentCounter) {
            navItems[nv].classList.add('jk-item-active')

            anime({
                targets: '.jk-item-active',
                width: 90

            })
        }
    }
}

//Set Active Slide
var setActiveSlide = function () {
    for (var sld = 0; sliderItem.length > sld; sld++) {
        let mySlideNum = parseInt(sliderItem[sld].getAttribute('data-slide'));

        if (mySlideNum === currentCounter) {
            sliderItem[sld].classList.add('jk-slide-active')
            sliderItem[sld].querySelector('.jk-portfolio-item-box').classList.add('jk-scale-right')
            sliderItem[sld].querySelector('.jk-portfolio-item-thumb img').classList.add('jk-scale-up')
            sliderItem[sld].querySelector('.jk-portfolio-item-info').classList.add('jk-fade-from-left')
        }
    }
}

var changeActive = function () {
    for (var rm = 0; navItems.length > rm; rm++) {
        navItems[rm].classList.remove('jk-item-active')
        anime({
            targets: navItems[rm],
            width: 20

        })
    }

    for (var rms = 0; sliderItem.length > rms; rms++) {
        navItems[rms].classList.remove('jk-slide-active')
        sliderItem[rms].querySelector('.jk-portfolio-item-box').classList.remove('jk-scale-right')
        sliderItem[rms].querySelector('.jk-portfolio-item-thumb img').classList.remove('jk-scale-up')
        sliderItem[rms].querySelector('.jk-portfolio-item-info').classList.remove('jk-fade-from-left')

    }
    setActiveNav();
    setActiveSlide();
}



// ACTIONS
totalSlide.innerHTML = counterFormatter(sliderTotalItems)

anime({
    targets: '.jk-item-active',
    width: 90

})

nextItem.addEventListener('click', function () {
    nextSlideAnim();
    counterAdd();
    changeActive();
})




prevItem.addEventListener('click', function () {
    prevSlideAnim();
    counterRemove();
    changeActive();
})