$(document).ready(function() {
  // view produtcs home
  viewProducts();

  // slider slick slider
  $('.single-item-banner').slick({
    dots: true,
    speed: 900,
    autoplay: true
  });
  // // toggle class - bg banner
  // $('.single-item-banner').on('afterChange', function(event, slick, currentSlide){
  //   $('.banners').attr('class','banners currentSlide'+currentSlide);
  // });
});
