// ---------- Бургер

$(document).ready(function() {
  $(document).ready(function() {
    $('.burger').click(function() {
      $('.burger').toggleClass('active');
      $('.header__block-list').slideToggle();
    });
  });
});
// ---------- /Бургер

//------ Блок Объектная модель

// После загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  const objectModelSwiper = new Swiper('.object-model__slider', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    observer: true,
    observeParents: true, 

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.object-model__slider .swiper-button-next',
      prevEl: '.object-model__slider .swiper-button-prev',
    }
  });

  objectModelSwiper();
  const images = document.querySelectorAll('.object-model__slide img');
  let loadedImages = 0;

  images.forEach(img => {
    if (img.complete) {
      checkAllImagesLoaded();
    } else {
      img.addEventListener('load', checkAllImagesLoaded);
    }
  });

  function checkAllImagesLoaded() {
    loadedImages++;
    if (loadedImages === images.length) {
      objectModelSwiper.update(); // Обновляем Swiper
    }
  }

  setTimeout(() => {
    objectModelSwiper.update();
    objectModelSwiper.slideTo(0); // Вернуться к первому слайду
  }, 100);
});

// ------- Блок Объектная модель


// $(document).on('click', '.input-select-items li', function(e) {
//   const value = $(this).text();

//   $(this).closest('label').find('input').val(value);
//   $(this).closest('label').find('.input-select-items ul').slideUp();
// });

// $(document).on('click', '.input-select-btn', function(e) {
//   $(this).closest('label').find('.input-select-items ul').slideToggle();
// });

// $(".catalog__selectors button").on("click", function () {
//   $(".catalog__selectors button").removeClass('active');

//   $(this).addClass('active');
// });

//------ /Блок Объектная модель

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

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Валидация формы
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const agree = document.getElementById('agree').checked;
  
  if (!name) {
    alert('Пожалуйста, введите ваше имя');
    return;
  }
  
  if (!phone) {
    alert('Пожалуйста, введите ваш номер телефона');
    return;
  }
  
  if (!agree) {
    alert('Необходимо ваше согласие на обработку персональных данных');
    return;
  }
  
  // Отправка данных на сервер
  alert('Спасибо! Ваш вопрос отправлен. Мы свяжемся с вами в ближайшее время.');
  this.reset();
});

// Маска для телефона
document.getElementById('phone').addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, '');
  
  if (value.length > 0) {
    value = value.match(/.{1,3}/g).join(') ');
    value = '(' + value;
    
    if (value.length > 8) {
      value = value.substring(0, 8) + '-' + value.substring(8);
    }
    
    if (value.length > 11) {
      value = value.substring(0, 11) + '-' + value.substring(11, 13);
    }
  }
  
  e.target.value = value;
});

// ----- Чекбокс в форме

$(".check-label").on("click", function () {
    let isChecked = $(this).find("input").prop("checked");
    if (isChecked) {
        $(this).find(".fakecheck").addClass("checked");
    } else {
        $(this).find(".fakecheck").removeClass("checked");
    }
});

// $(document).on('mouseenter', 'form input[type="submit"]', function () {
//     var $form = $(this).closest('form');
//     var $fakecheck = $form.find('.fakecheck');

//     if ($fakecheck.hasClass('checked')) {
//         $fakecheck.removeClass('error');
//     } else {
//         $fakecheck.addClass('error');
//     }
// });

// ----- /Чекбокс в форме