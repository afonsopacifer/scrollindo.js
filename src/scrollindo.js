(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('scrollindo', factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory;
  } else {
    root.scrollindo = factory;
  }
}(this, function scrollindo(element, newClass) {
  if (typeof element !== 'string' || typeof newClass !== 'string') {
    return;
  }

  var $element = document.querySelector(element);
  var shouldScroll = true;

  function init () {
    window.addEventListener('scroll', handleScroll, false);
  }

  function handleScroll () {
    if (!shouldScroll) {
      return;
    }
    blockScroll();

    var windowScroll = window.scrollY + window.innerHeight;
    var elementOffsetTop = $element.offsetTop;
    if (windowScroll >= elementOffsetTop) {
      $element.classList.add(newClass);
    }
    setTimeout(allowScroll, 500);
  }

  function blockScroll () {
    shouldScroll = false;
  }

  function allowScroll () {
    shouldScroll = true;
  }

  init();
}));
