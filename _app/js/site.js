
// init Packery
var grid = document.querySelector('.grid');
var pckry = new Packery( grid, {
  itemSelector: '.grid-item',
  percentPosition: true
});
// layout Packery after each image loads
imagesLoaded( grid ).on( 'progress', function() {
  pckry.layout();
});


smoothScroll.init({
    selector: 'a', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 900, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});
