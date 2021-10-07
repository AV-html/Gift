let isRead = false;

const mailEl = document.querySelector('.mail');
const bodyEL = document.querySelector('.mail__body');
const topEl = document.querySelector('.mail__top');
const paperEl = document.querySelector('.mail__envelope');
const textEl = document.querySelector('.mail__text');

const paperPopupOverEl = document.querySelector('.popup__overlay');
const paperPopupBodyEl = document.querySelector('.popup__body');
const popupEl = document.querySelector('.popup');

bodyEL.addEventListener('click', function () {
    if (paperEl.classList.contains("_open") && isRead) {
        paperPopupOverEl.style.cssText = `opacity: 1; pointer-events: all;`
        paperPopupBodyEl.style.cssText = `transform: translate(-50%, -50%) scale(1);`;
        textEl.hidden = true;
        isRead = false;
        return;
    }
    paperEl.classList.toggle("_open");
    topEl.classList.toggle("_open");
    if (topEl.classList.contains("_open")) {
        mailEl.style.cssText = `animation: none`;
        isRead = true;
    }
});

popupEl.addEventListener('click', function (event) {
    if (!event.target.closest('.popup__body')) {
        paperPopupOverEl.style.cssText = `opacity: 0; pointer-events: none;`
        paperPopupBodyEl.style.cssText = `transform: translate(-50%, -50%) scale(0.5);`;
        textEl.hidden = false;
    }
});

