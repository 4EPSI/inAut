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