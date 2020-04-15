'use strict';

(function() {
  var DESKTOP = 1041;
  var TABLET = 768;
  var body = document.querySelector("body");
  var header = document.querySelector(".main-header");
  var burger = header.querySelector(".burger");
  var advertisement = document.querySelector("#advertisement");
  var widthWindow = document.documentElement.clientWidth;

  if (!header || !burger || !body) {
    return;
  }

  var onScroll = function() {
    var bottomPositionaAvertisement = advertisement.getBoundingClientRect().bottom;

    if (widthWindow >= TABLET) {
      if (header.offsetTop > bottomPositionaAvertisement) {
        header.classList.add('main-header--scroll');
      } else {
        header.classList.remove('main-header--scroll');
      }
    }
  };

  var onResize = function() {
    widthWindow = document.documentElement.clientWidth;
    if (widthWindow >= DESKTOP) {
      body.classList.toggle("no-scroll", false);
    } else {
      if (header.classList.contains("main-header--opened")) {
        body.classList.toggle("no-scroll", true);
      }
    }
  };

  var onClickHeader = function(evt) {
    var activeElement = evt.target;
    if (activeElement.classList.contains("site-list__link")) {
      header.classList.remove("main-header--open");
      burger.classList.remove("burger--close");
      body.classList.remove("no-scroll");
      header.removeEventListener('click', onClickHeader);
    }
  };

  var onClickBtn = function(evt) {
    evt.preventDefault();

    header.classList.toggle("main-header--open");
    burger.classList.toggle("burger--close");

    if (header.classList.contains("main-header--open")) {
      header.addEventListener('click', onClickHeader);
      body.classList.add('no-scroll');
    } else {
      header.addEventListener('click', onClickHeader);
      body.classList.remove('no-scroll');
    }
  };

  burger.addEventListener('click', onClickBtn);
  window.addEventListener('resize', onResize);
  window.addEventListener('scroll', onScroll);

})();
