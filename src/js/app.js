import 'lazysizes';
import fitvids from 'fitvids';

import {isTouchDevice} from './libs/is-touch-device';

if ('querySelector' in document && 'addEventListener' in window) {
  document.addEventListener('DOMContentLoaded', function() {
    // Fitvids
    fitvids('.main');

    // Add body class for touch devices
    if (isTouchDevice()) {
      document.getElementsByTagName('BODY')[0].classList.add('touch');
    }
  });
}
