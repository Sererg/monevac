import $ from 'jquery';
import 'jquery-mask-plugin';

$.mask = $.fn.mask;

$(document).ready(function() {
    $("#tel").mask("+7 (999) 999-99-99");
});

const form = document.querySelector('.contact-us__form');
const nameInput = document.querySelector('#name');
const telInput = document.querySelector('#tel');
const messageInput = document.querySelector('#message');
const agreeInput = document.querySelector('#agree');

const phoneRegex = /^\+7 $$\d{3}$$ \d{3}-\d{2}-\d{2}$/;

form.onsubmit = function() {
    return confirm('Вы действительно хотите отправить свой вопрос?');
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Проверка имени
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('invalid');
        isValid = false;
    } else {
        nameInput.classList.remove('invalid');
    }

    // Проверка телефона
    if (!phoneRegex.test(telInput.value)) {
        telInput.classList.add('invalid');
        isValid = false;
    } else {
        telInput.classList.remove('invalid');
    }

    // Проверка сообщения
    if (messageInput.value.trim() === '') {
        messageInput.classList.add('invalid');
        isValid = false;
    } else {
        messageInput.classList.remove('invalid');
    }

    // Проверка согласия
    if (!agreeInput.checked) {
        alert("Пожалуйста, подтвердите свое согласие на обработку персональных данных.");
        agreeInput.classList.add('invalid');
        isValid = false;
    } else {
        agreeInput.classList.remove('invalid');
    }

    if (isValid) {
        // Отправка формы
        console.log('Форма валидна и может быть отправлена');
        // Здесь можно добавить код для отправки формы на сервер
    }
});