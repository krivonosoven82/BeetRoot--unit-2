$(document).ready(function(){
  $('.content__item').not(':first').hide();
  $('.nav .nav__item:first').addClass('active');
  $('.nav .nav__item:first .nav__title:first').addClass('white');

  $('.nav .nav__item').click(function(event){
    $('.nav .nav__item').removeClass('active').eq($(this).index()).addClass('active');
    $('.nav .nav__item .nav__title').removeClass('white').eq($(this).index()).addClass('white');
    $('.content__item').hide().eq($(this).index()).fadeIn();
  });

  $("#rating").circliful({
    animation: 1,
    animationStep: 10,
    foregroundBorderWidth: 10,
    backgroundBorderWidth: 10,
    percent: 72,
    textColor: '#333',
    foregroundColor: '#00ccff',
    backgroundColor: '#eaeaea',
    percentageTextSize: 30,
  });
});
