$(function () {
  $('#cart').click(function () {
    $('.modal').addClass('is-open');
  });
 
  $('.close').click(function () {
    $('.modal').removeClass('is-open');
  }); 
  $('#stop').click(function () {
    $('.modal').removeClass('is-open');
  });
});
