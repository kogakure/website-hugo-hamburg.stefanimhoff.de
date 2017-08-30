require('lazysizes');
require('./vendor/ios-rotate-scaling-fix');

var fitvids = require('fitvids');
var attachFastClick = require('fastclick');
var touch = require('./libs/is-touch-device.js').isTouchDevice();


if ('querySelector' in document && 'addEventListener' in window) {
  document.addEventListener('DOMContentLoaded', function() {
    // FastClick
    attachFastClick(document.body);

    // Fitvids
    fitvids('.main');

    // Add body class for touch devices
    if (touch) {
      document.getElementsByTagName("BODY")[0].classList.add("touch");
    }
  });
}
