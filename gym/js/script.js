$('.mobile-menu').on('click', function (e) {
   e.preventDefault();
   $('.menu-btn').toggleClass('menu-active')
   $('.menuu').toggleClass('menu-active')
   $('.unvis').toggleClass('menu-active')
   $('.main-banner-title').toggleClass('menu-active')
   $('.speed-image').toggleClass('menu-active')
   $('.img-open-menu').toggleClass('menu-active')
});
