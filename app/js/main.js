$(function () {

  $('.header__burger').on('click', function () {
    $('.header__inner').toggleClass('header__inner--active');
  })


  $('.team__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="20" height="51" viewBox="0 0 20 51" fill="none" xmlns="http://www.w3.org/2000/svg"> <line y1 = "-0.5" x2 = "30.8237" y2 = "-0.5" transform = "matrix(0.583019 -0.812459 0.713794 0.700356 1.02917 51)" stroke = "black" /><line y1 = "-0.5" x2 = "30.8237" y2 = "-0.5" transform = "matrix(0.583019 0.812459 -0.713794 0.700356 1 1)"stroke = "black" / ></svg></button > ',
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3
      }
    }]
  });



  // wow = new WOW({
  //   boxClass: 'wow', // default
  //   animateClass: 'animated', // default
  //   offset: 0, // default
  //   mobile: true, // default
  //   live: true // default
  // })
  // wow.init();
});