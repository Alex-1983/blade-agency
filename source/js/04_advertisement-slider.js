'use strict';

(function() {
  var advertisement = document.querySelector(".advertisement");
  var advertisementSlider = advertisement.querySelector(".swiper-container");
  var pagination = advertisement.querySelector(".swiper-pagination");
  var buttonPrevious = advertisement.querySelector(".toggles__btn--prev");
  var buttonNext = advertisement.querySelector(".toggles__btn--next");

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
