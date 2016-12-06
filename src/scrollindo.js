(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('scrollindo', function() {
      return factory;
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory;
  } else {
    root.scrollindo = factory;
  }
}(this, function scrollindo(ele, newClass) {
  if (typeof(ele) === 'string')
    var element = document.querySelector(ele);
    var elementTop = element.offsetTop;
    var windowHeight = window.innerHeight;
  window.addEventListener('scroll', function() {
    var elementPosition = elementTop - document.documentElement.scrollTop;
    if(windowHeight > elementPosition) {
      element.classList.add(newClass);
    }
  });
})
);
