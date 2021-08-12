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
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    simulateTouch: false,
    loop: true,
    speed: 300,
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