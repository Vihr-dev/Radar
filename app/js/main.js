$(function () {
  $('.team__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="20" height="51" viewBox="0 0 20 51" fill="none" xmlns="http://www.w3.org/2000/svg"> <line y1 = "-0.5" x2 = "30.8237" y2 = "-0.5" transform = "matrix(0.583019 -0.812459 0.713794 0.700356 1.02917 51)" stroke = "black" /><line y1 = "-0.5" x2 = "30.8237" y2 = "-0.5" transform = "matrix(0.583019 0.812459 -0.713794 0.700356 1 1)"stroke = "black" / ></svg></button > ',
  });
});