'use strict';

(function() {
  var advertisement = document.querySelector(".advertisement__slider");
  var advertisementSlider = advertisement.querySelector(".swiper-container");
  var pagination = advertisement.querySelector(".swiper-pagination");
  var buttonPrevious = document.querySelector(".toggles__btn--prev");
  var buttonNext = document.querySelector(".toggles__btn--next");

  var advertisement = new Swiper(advertisementSlider, {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrevious
    }
  });

})();
