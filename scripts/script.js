const swiper = new Swiper('object-model__image-block', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.object-model__image-block .swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.intro__main-block .swiper-button-next',
  //   prevEl: '.intro__main-block .swiper-button-prev',
  // },
});

$('.accordeon__header').click(function() {
  if ($(this).closest('.accordeon__item').hasClass('active')) {
    $(this).closest('.accordeon').find('.accordeon__body').slideUp(300);
    $(this).closest('.accordeon__item').removeClass('active');
  } else {
    $('.accordeon__header').closest('.accordeon').find('.accordeon__body').slideUp(300);
    $('.accordeon__header').closest('.accordeon__item').removeClass('active');
    
    $(this).closest('.accordeon').find('.accordeon__body').slideDown(300);
    $(this).closest('.accordeon__item').addClass('active');
  }
});