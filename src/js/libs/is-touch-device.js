exports.isTouchDevice = function() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
};
