// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// var site = '';
// $(function() {
//     console.log( Page.width );
//     site = new Site();
//     site.init();
// });


// var Page = {
//     width : $(window).width(),
//     height : $(window).height(),

// };

// function Site() {
//     this.init = function() {
//         $('#nav_toggle').on('click', function() {
//             site.toggleMenu();
//         });
//         if(Page.width < 768) {site.toggleMenu();}
//     },
//     this.toggleMenu = function() {
//         $('#sidebar').toggleClass( 'navhide' );
//         $('#content').toggleClass( 'navhide' );
//     }
// }