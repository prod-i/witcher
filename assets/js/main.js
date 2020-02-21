
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.header');
const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.arrow',
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
      }
    },
});
// menu-button-active

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
});
