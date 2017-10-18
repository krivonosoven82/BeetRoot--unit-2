$(document).ready(function(){

//----------filter--------------------------------------------------------------

  $(function () {
      //Initialize filterizr with default options
      $('#filtr-container').filterizr();
  });

  $(function() {
      //Simple filter controls
      $('.custom-simplefilter li').click(function() {
          $('.custom-simplefilter li').removeClass('active');
          $(this).addClass('active');
      });
  });

//----------slick---------------------------------------------------------------
  $('#team__screen').slick({
    arrows: false,
     dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
//------------------------------------------------------------------------------
  $('#testimonials__container').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
//------------------------------------------------------------------------------
  //Slow scroll from menu-item to current section
  $(".header__nav-item").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 800);
  });

  $(".header__scroll").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 800);
  });
//------------------------------------------------------------------------------
//back to top
if ($('#button-up').length) {
  let scrollTrigger = 300, // px
    backToTop = function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#button-up').addClass('is-visible');
      } else {
        $('#button-up').removeClass('is-visible');
      }
    };
  backToTop();
  $(window).on('scroll', function () {
    backToTop();
  });
  $('#button-up').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
}

//------------------------------------------------------------------------------
// Set active class header__nav-item--active
$('.header__nav-item').click(function(e) {
  e.preventDefault();
  $('.header__nav a').removeClass('header__nav-item--active');
  $(this).addClass('header__nav-item--active');
});

//------------------------------------------------------------------------------
// Set active class header__nav-mobail--active
$('.header__item-mobail').click(function(e) {
  e.preventDefault();
  $('.header__nav-mobail a').removeClass('header__item-mobail--active');
  $(this).addClass('header__item-mobail--active');
});

$('#btn-menu').click(function(){
  $('#nav-mobail').toggleClass('header__nav-mobail--active');
});

//Fixed sticky aside menu
if ($('#nav-scroll').length) {
  let scrollTrigger = 100, // px
    backToTop = function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#nav-scroll').addClass('is-visible');
      } else {
        $('#nav-scroll').removeClass('is-visible');
      }
    };
  backToTop();
  $(window).on('scroll', function () {
    backToTop();
  });
}

});
