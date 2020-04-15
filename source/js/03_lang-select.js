'use strict';

(function () {
  var langBlock = document.querySelector(".language-block");

  if (!langBlock) {
    return;
  }

  var langOpen = langBlock.querySelector(".language-block__title");
  var inputs = langBlock.querySelectorAll('input');

  var addListener = function (element) {
    element.addEventListener('change', function () {
      langOpen.innerHTML = element.value;
      langBlock.classList.remove("language-block--open");
    });
  };

  var onClickLangOpen = function (evt) {
    evt.preventDefault();
    langBlock.classList.toggle("language-block--open");
    for (var i = 0; i < inputs.length; i++) {
      addListener(inputs[i]);
    }
  };

  langOpen.addEventListener('click', onClickLangOpen);
})();
