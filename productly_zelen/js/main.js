$(function() {

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });


    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
    });


});