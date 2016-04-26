$(document).ready(function() {
  // view produtcs home
  viewProducts();

  // slider slick slider
  $('.single-item-banner').slick({
    dots: true,
    speed: 900,
    autoplay: true
  });
  var value = window.devicePixelRatio;
  var w = window.innerWidth;
  var lWidth = window.screen.width;
  console.log(value);
  console.log(w);
  console.log(lWidth);

});
