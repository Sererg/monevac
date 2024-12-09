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
const nameError = document.querySelector('#name-error');
const telError = document.querySelector('#tel-error');
const messageError = document.querySelector('#message-error');
const agreeError = document.querySelector('#agree-error');
const submitButton = document.querySelector('#submit-button');

const phoneRegex = /^\+7 $$\d{3}$$ \d{3}-\d{2}-\d{2}$/;

form.onsubmit = function() {
    return confirm('Вы действительно хотите отправить свой вопрос?');
};

// Функция для отображения ошибок
function showError(input, errorElement, message) {
    input.classList.add('invalid');
    errorElement.style.display = 'block'; // Показать ошибку
    errorElement.textContent = message;
}

// Функция для удаления ошибок
function removeError(input, errorElement) {
    input.classList.remove('invalid');
    errorElement.style.display = 'none'; // Скрыть ошибку
    errorElement.textContent = '';
}

// Валидация при клике на кнопку отправки
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    let isValid = true;

    // Проверка имени
    if (nameInput.value.trim() === '') {
        showError(nameInput, nameError, 'Является обязательным полем');
        isValid = false;
    } else {
        removeError(nameInput, nameError);
    }

    // Проверка телефона
    if (telInput.value.trim() === '') {
        showError(telInput, telError, 'Является обязательным полем');
        isValid = false;
    } else {
        removeError(telInput, telError);
    }

      telInput.addEventListener('input', function() {
    if (!phoneRegex.test(telInput.value)) {
        showError(telInput, telError, 'Введите номер телефона в правильном формате');
    } else {
        removeError(telInput, telError);
    }
});

    // Проверка сообщения
    if (messageInput.value.trim() === '') {
        showError(messageInput, messageError, 'Является обязательным полем');
        isValid = false;
    } else {
        removeError(messageInput, messageError);
    }

    // Проверка согласия
    if (!agreeInput.checked) {
        showError(agreeInput, agreeError, 'Является обязательным полем');
        isValid = false;
    } else {
        removeError(agreeInput, agreeError);
    }

    if (isValid) {
        // Отправка формы
        console.log('Форма валидна и может быть отправлена');
        // Здесь можно добавить код для отправки формы на сервер
    }
});