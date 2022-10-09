const refs = {
   headerEl: document.querySelector('.header__js'),
};

window.onscroll = function () {
   if (window.screen.width >= 768) {
      scrollY <= 70 ? refs.headerEl.classList.remove('header__bg') : refs.headerEl.classList.add('header__bg');
   } else {
      scrollY <= 120 ? refs.headerEl.classList.remove('header__bg') : refs.headerEl.classList.add('header__bg');
   }
};
