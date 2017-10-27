/* Bootstrap
------------------------------------------------------------------------------ */
try {
    window.$ = window.jQuery = require('jquery');
    window.Popper = Popper;
    require('bootstrap');
    // or individually as needed
    // require('bootstrap/js/dist/util');
    // require('bootstrap/js/dist/dropdown');
} catch (e) {}
