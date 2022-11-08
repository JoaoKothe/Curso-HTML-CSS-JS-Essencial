var overlay = document.querySelector('.jk-overlay')
var frameImage = document.querySelector('.jk-gallery-frame-image')
var frameContainer = document.querySelector('.jk-gallery-frame-container')
var galleryImages = document.querySelectorAll('.jk-thumb-img')
var closeGallery = document.querySelectorAll('.jk-toggle-gallery')
var btnNext = document.querySelector('.jk-item-next')
var btnPrev = document.querySelector('.jk-item-prev')
var currCounter = document.querySelector('.jk-current-slide')
var totalCounter = document.querySelector('.jk-total-slide')
var skeletonLoading = document.querySelector('.jk-skeleton-loading')

var postGallery = document.querySelector('.jk-post-gallery')
var postGalleryHeight = postGallery.clientHeight
postGallery.style.height = (postGalleryHeight - 270) + 'px';

// Counter Formatter
var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n
    } else {
        return n;
    }
}


totalCounter.innerHTML = counterFormatter(galleryImages.length);

// Skeleton Loading
const skeletonAnim = function (imagem) {
    var myImage = new Image();
    myImage.src = imagem;
    myImage.addEventListener('load', function () {
        skeletonLoading.classList.add('jk-fade-out')
        setTimeout(function () {
            skeletonLoading.style.display = 'none';
        }, 2000)
    })
}


// Open Modal Gallery
const getImageSrc = function () {
    for (var i = 0; galleryImages.length > i; i++) {
        galleryImages[i].addEventListener('click', function () {
            var imageSrc = this.getAttribute('data-src')
            var itemNum = this.getAttribute('data-item')
            skeletonLoading.style.display = 'flex';
            frameImage.setAttribute('src', imageSrc)
            frameImage.setAttribute('data-index', itemNum)
            overlay.classList.add('jk-is-open')
            frameContainer.classList.add('jk-is-open')
            currCounter.innerHTML = counterFormatter(itemNum);
            skeletonAnim(imageSrc)
        })
    }
}

getImageSrc()

for (var c = 0; closeGallery.length > c; c++) {
    closeGallery[c].addEventListener('click', function () {
        overlay.classList.remove('jk-is-open')
        frameContainer.classList.remove('jk-is-open')
    })
}


const nextItem = function () {
    // Identificar o item atual no frame. 
    var currItemNum = frameImage.getAttribute('data-index')

    // Definir o número do Next Item. 
    var nextItemNum = parseInt(currItemNum) + 1

    // Fazer o loop e identificar qual item faz match com número do próximo item.
    for (var n = 0; galleryImages.length > n; n++) {
        var item = galleryImages[n]
        var itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === nextItemNum) {
            // Capturar o data-src 
            var nextSrc = item.getAttribute('data-src')
            var nextIndex = item.getAttribute('data-item')
            skeletonLoading.style.display = 'flex';
            // Passar o data-src para a tag de img no frame.
            frameImage.setAttribute('src', nextSrc)
            frameImage.setAttribute('data-index', nextIndex)
            currCounter.innerHTML = counterFormatter(nextIndex);
            skeletonAnim(nextSrc)
        }
    }
}

const prevItem = function () {
    // Identificar o item atual no frame. 
    var currItemNum = frameImage.getAttribute('data-index')

    // Definir o número do Next Item. 
    var prevItemNum = parseInt(currItemNum) - 1

    // Fazer o loop e identificar qual item faz match com número do próximo item.
    for (var p = 0; galleryImages.length > p; p++) {
        var item = galleryImages[p]
        var itemNum = parseInt(item.getAttribute('data-item'));
        skeletonLoading.style.display = 'flex';
        if (itemNum === prevItemNum) {
            // Capturar o data-src 
            var prevSrc = item.getAttribute('data-src')
            var prevIndex = item.getAttribute('data-item')
            // Passar o data-src para a tag de img no frame.
            frameImage.setAttribute('src', prevSrc)
            frameImage.setAttribute('data-index', prevIndex)
            currCounter.innerHTML = counterFormatter(prevIndex);
            skeletonAnim(prevSrc)
        }
    }
}


btnNext.addEventListener('click', function () {
    nextItem();
})
btnPrev.addEventListener('click', function () {
    prevItem();
})