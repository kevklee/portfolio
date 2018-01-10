$('.typeit').typeIt({
  strings: [ "I create beautiful designs", "I enjoy front-end coding", "I live and breath ux"],
  speed: 160,
  breakLines: false,
  autoStart: true,
  loop: true,
});

$('#button').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

$('#button2').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 800);
  }
});
