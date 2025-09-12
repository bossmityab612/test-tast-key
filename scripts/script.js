// ------- /универсальная функция для попапов

// ------ Попап окно обратной связи

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.querySelector('.popup');
  const openBtns = document.querySelectorAll('.open-popup-btn');
  const closeBtn = document.querySelectorAll('.popup-close');
  const form = document.querySelector('.popup-form');

  // Открытие попапа для всех кнопок
  openBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      popup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  function closePopup(popupId) {

    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
    
  }

  // closeBtn.addEventListener('click', closePopup);

  closeBtn.forEach((button) => {
    button.addEventListener('click', function (){
      closePopup('popup1');
    });
  })
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      closePopup('popup1');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup.style.display === 'flex') {
      closePopup('popup1');
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#e0e0e0';
      }
    });

    if (isValid) {
      alert('Заявка успешно отправлена!');
      closePopup('popup1');
      form.reset();
    }
  });

  // ------ //Попап окно обратной связи

  // ------ Попап окно Карточки товара

  const popupAddForm = document.querySelector('.card-product__popup');
  const openPopupButtonAddForm = document.querySelectorAll('.object-model__cards-button');
  const closePopupButtonAddForm = document.querySelectorAll('.popup-close');

  // Функции открытия/закрытия

  openPopupButtonAddForm.forEach(element => {
    element.addEventListener('click', function (){
      openPopup();
    });
  })

  // openPopupButtonAddForm.addEventListener('click', openPopup);
  function openPopup() {
    popup.style.display = 'flex';
  }

  closePopupButtonAddForm.forEach(element => {
    element.addEventListener('click', function (){
      closePopup('popup2');
    });
  })
});

// ---------- Бургер

$(document).ready(function() {
  $('.burger').click(function() {
    $('.burger').toggleClass('active');
    $('.burger-main-block').slideToggle();
  });
});

// ---------- /Бургер

//------ Блок Объектная модель свайпер

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