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


$('.customer-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    // centerMode: true,
    arrows: true,
    variableWidth: true,
    draggable: false
});
$('.customNextBtn').on('click', function() {
    $('.customer-slider').slick('slickNext');
});

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