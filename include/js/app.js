$(document).ready(function() {
    $('#tImg').hover(function() {
      $(this).css({
        'transform': 'scale(1.1)',
        'cursor': 'pointer',
        'opasity':'.5'
      });
    }, function() {
      $(this).css({
        'transform': 'scale(1)'
      });
    });
    $('#tImg1').hover(function() {
        $(this).css({
          'transform': 'scale(1.1)',
          'cursor': 'pointer'
        });
      }, function() {
        $(this).css({
          'transform': 'scale(1)'
        });
      });
      $('#tImg2').hover(function() {
        $(this).css({
          'transform': 'scale(1.1)',
          'cursor': 'pointer',
        });
      }, function() {
        $(this).css({
          'transform': 'scale(1)'
        });
      });
    $('#img').mouseenter(function() {
        $('#hide').slideDown(900,'easeInQuad');
     });
    $('#hide').mouseleave(function(){
          $(this).slideUp(900,'easeOutQuad');
      });
  });
  