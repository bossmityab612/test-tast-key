
// универсальная функция для попапов


// @param {Object} options - Настройки попапов

function initPopups(options) {
  // Настройки по умолчанию
  const settings = $.extend({
    popupClass: '.popup',          // Класс попапа
    openButton: '.popup-open',     // Класс кнопки открытия
    closeButton: '.popup-close',   // Класс кнопки закрытия
    overlayClass: '.popup-overlay',// Класс оверлея
    activeClass: 'active',         // Класс активности
    closeOnOverlay: true,          // Закрывать по клику на оверлей
    closeOnEsc: true,              // Закрывать по ESC
    bodyScroll: false,             // Разрешить скролл body при открытом попапе
    animationSpeed: 300,           // Скорость анимации
    onOpen: null,                  // Callback при открытии
    onClose: null                  // Callback при закрытии
  }, options);

  // Открытие попапа
  function openPopup(popupId) {
      const $popup = $(popupId);
      
      if (!$popup.length) return;
      
      // Закрываем все другие попапы
      closeAllPopups();
      
      // Блокируем скролл body
      if (!settings.bodyScroll) {
        $('body').css('overflow', 'hidden');
      }
      
      // Показываем попап
      $popup.addClass(settings.activeClass);
      
      // Показываем оверлей
      if (settings.overlayClass) {
        $(settings.overlayClass).addClass(settings.activeClass);
      }
      
      // Вызываем callback
      if (typeof settings.onOpen === 'function') {
        settings.onOpen($popup);
      }
  }

  // Закрытие попапа
  function closePopup() {
      const $activePopup = $(settings.popupClass + '.' + settings.activeClass);
      
      if (!$activePopup.length) return;
      
      // Скрываем попап
      $activePopup.removeClass(settings.activeClass);
      
      // Скрываем оверлей
      if (settings.overlayClass) {
          $(settings.overlayClass).removeClass(settings.activeClass);
      }
      
      // Разблокируем скролл body
      if (!settings.bodyScroll) {
          $('body').css('overflow', '');
      }
      
      // Вызываем callback
      if (typeof settings.onClose === 'function') {
          settings.onClose($activePopup);
      }
  }

  // Закрытие всех попапов
  function closeAllPopups() {
    $(settings.popupClass).each(function() {
      if ($(this).hasClass(settings.activeClass)) {
        closePopup();
      }
    });
  }

  // Обработчики событий
  $(document).ready(function() {
    // Открытие по клику на кнопку
    $(document).on('click', settings.openButton, function(e) {
      e.preventDefault();
      const popupId = $(this).data('popup') || $(this).attr('href');
      openPopup(popupId);
    });

    // Закрытие по клику на кнопку закрытия
    $(document).on('click', settings.closeButton, function(e) {
      e.preventDefault();
      closePopup();
    });

    // Закрытие по клику на оверлей
    if (settings.closeOnOverlay && settings.overlayClass) {
      $(document).on('click', settings.overlayClass, function(e) {
        if (e.target === this) {
          closePopup();
        }
      });
    }

    // Закрытие по ESC
    if (settings.closeOnEsc) {
      $(document).on('keydown', function(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
          closePopup();
        }
      });
    }
  });

  // Публичные методы
  return {
    open: openPopup,
    close: closePopup,
    closeAll: closeAllPopups
  };
}

// Инициализация попапов
const popups = initPopups({
  // Можно переопределить настройки по умолчанию
  animationSpeed: 400,
  onOpen: function($popup) {
    console.log('Попап открыт:', $popup.attr('id'));
  },
  onClose: function($popup) {
    console.log('Попап закрыт:', $popup.attr('id'));
  }
});

// ------- /универсальная функция для попапов

// ------ Попап окно обратной связи

// document.addEventListener('DOMContentLoaded', function() {
//   const popup = document.querySelector('.popup');
//   const openBtns = document.querySelectorAll('.open-popup-btn');
//   const closeBtn = document.querySelector('.popup-close');
//   const form = document.querySelector('.popup-form');

//   // Открытие попапа для всех кнопок
//   openBtns.forEach(btn => {
//     btn.addEventListener('click', function() {
//       popup.style.display = 'flex';
//       document.body.style.overflow = 'hidden';
//     });
//   });

//   function closePopup() {
//     popup.style.display = 'none';
//     document.body.style.overflow = '';
//   }

//   closeBtn.addEventListener('click', closePopup);

//   popup.addEventListener('click', function(e) {
//     if (e.target === popup) {
//       closePopup();
//     }
//   });

//   document.addEventListener('keydown', function(e) {
//     if (e.key === 'Escape' && popup.style.display === 'flex') {
//       closePopup();
//     }
//   });

//   form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const inputs = form.querySelectorAll('input[required]');
//     let isValid = true;

//     inputs.forEach(input => {
//       if (!input.value.trim()) {
//         isValid = false;
//         input.style.borderColor = 'red';
//       } else {
//         input.style.borderColor = '#e0e0e0';
//       }
//     });

//     if (isValid) {
//       alert('Заявка успешно отправлена!');
//       closePopup();
//       form.reset();
//     }
//   });
// });

// ------ //Попап окно обратной связи

// ------ Попап окно Карточки товара

// const popupAddForm = document.querySelectorAll('.card-product__popup');
// const openPopupButtonAddForm = document.querySelector('.object-model__cards-button');
// const closePopupButtonAddForm = document.querySelectorAll('.popup-close');

// Функции открытия/закрытия
// function openPopup() {
//   popupAddForm.classList.add('popup_opened');
//   document.addEventListener('keydown', handleEscape);
// }

// function closePopup() {
//   popupAddForm.classList.remove('popup_opened');
//   document.removeEventListener('keydown', handleEscape);
// }

// ----------------
// $(document).ready(function() {
//   $(popupAddForm).click(function() {
//     $(popupAddForm).toggleClass('popup_opened');
//     $(openPopupButtonAddForm).slideToggle();
//   });
// });
// ---------------

// function handleEscape(evt) {
//   if (evt.key === 'Escape') {
//     closePopup();
//   }
// }

// // Обработчики событий
// openPopupButtonAddForm.addEventListener('click', openPopup);
// closePopupButtonAddForm.forEach(element => {
//   element.addEventListener('click', function() {closePopup()});
// });

// popupAddForm.forEach(element => {
//   element.addEventListener('click', function(evt) {
//     if (evt.target === element) {
//       closePopup();
//     }
//   });
// })

// ------ //Попап окно Карточки товара


// ---------- Бургер

$(document).ready(function() {
  $('.burger').click(function() {
    $('.burger').toggleClass('active');
    $('.burger-main-block').slideToggle();
  });
});

// ---------- /Бургер

//------ Блок Объектная модель

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  mousewheel: true, 
  // followFinger: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

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

// ----- /Чекбокс в форме