// Mobile menu
$('.burger').on('click', function () {
    $('.burger').toggleClass('active');
    $('body').toggleClass('no_scroll');
    $('.menu').toggleClass('active');
});
$(document).on('click', function (e) {
    if (!$(e.target).closest('.header').length) {
        $('.burger').removeClass('active');
        $('.menu').removeClass('active');
        $('body').removeClass('no_scroll');
    }
    e.stopPropagation();
});

// swiper
const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    speed: 300,
});
$('.swiper-dots').on('click', '.swiper-dot', function() {
  const index = $(this).data('index');
  swiper.slideTo(index);
  console.log(index);
});

$('.swiper-dot span').on('click', function () {
  $('.swiper-dot span').removeClass('active');
  $(this).addClass('active');
});
// $('.swiper-dot div').on('click', function () {
//   $('.swiper-dot div').removeClass('active');
//   $(this).addClass('active');
// });

// swiper2
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});


//swiper3
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 1
    }
  }
});




// $('.customer-slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     // slidesToShow: 2,
//     // centerMode: true,
//     arrows: true,
//     variableWidth: true,
//     draggable: false,
//     nextArrow: '<img src="img/svg/arrow_right.svg">',
//     prevArrow: '<img src="img/svg/arrow_left.svg">'
// });
// $('.customNextBtn').on('click', function() {
//     $('.customer-slider').slick('slickNext');
// });

// // our-customer-slider
// $('.our-customer-slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 2,
//     // centerMode: true,
//     arrows: true,
//     variableWidth: true,
//     draggable: false
// });