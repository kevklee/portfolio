$('.typeit').typeIt({
  strings: [ "I live and breath design", "I enjoy front-end coding", "I like to help others"],
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
