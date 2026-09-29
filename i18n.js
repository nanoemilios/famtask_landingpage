(function() {
  window._langData = {};

  window.t = function(key) {
    var value = window._langData[key];
    return typeof value === 'string' ? value : key;
  };
})();
