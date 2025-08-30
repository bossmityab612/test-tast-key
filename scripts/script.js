// После загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  const objectModelSwiper = new Swiper('.object-model__slider', {
    autoplay: {
      delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    observer: true,
    observeParents: true, 

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      }
    }
  });

  // const images = document.querySelectorAll('.object-model__slide img');
  // let loadedImages = 0;

  // images.forEach(img => {
  //   if (img.complete) {
  //     checkAllImagesLoaded();
  //   } else {
  //     img.addEventListener('load', checkAllImagesLoaded);
  //   }
  // });

  // function checkAllImagesLoaded() {
  //   loadedImages++;
  //   if (loadedImages === images.length) {
  //     objectModelSwiper.update(); // Обновляем Swiper
  //   }
  // }

  setTimeout(() => {
    objectModelSwiper.update();
    objectModelSwiper.slideTo(0); // Вернуться к первому слайду
}, 100);
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