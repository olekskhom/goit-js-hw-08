// Імпорт throttle з бібліотеки Lodash:
import throttle from 'lodash.throttle';

// Отримання посилань на DOM-елементи та змінних:
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('form input');
const textareaEl = document.querySelector('form textarea');
let formDate = {};
const STORAGE_KEY = 'feedback';

// Додавання подій слухання для форми:
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

populateForm();


// Функція 'onFormSubmit(event)' викликається при події відправки форми.Вона перевіряє, чи всі поля заповнені, якщо ні- виводить сповіщення.
// Потім очищає локальне сховище, скидає дані форми та обнуляє змінну formDate.
function onFormSubmit(event) {
  event.preventDefault();

  if (inputEl.value === '' || textareaEl.value === '') {
    return alert('Fields must be filled in');
  }

  console.log(formDate);

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  formDate = {};
}


// Функція onFormInput(event) викликається при події введення у поля форми.Вона зберігає значення введених даних у змінній formDate, використовуючи ім'я поля як ключ. 
// Потім зберігає всі дані formDate у локальне сховище за допомогою localStorage.setItem.
function onFormInput(event) {
  const formValue = event.target.value;
  const formKay = event.target.name;

  formDate[formKay] = formValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDate));
}


// Функція populateForm() призначена для заповнення полів форми збереженими даними, які зберігаються у локальному сховищі. 
// Вона отримує дані з сховища, перевіряє їх наявність та, якщо такі дані є, заповнює поля форми.
function populateForm() {
  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedForm.email) {
    inputEl.value = savedForm.email;
    formDate.email = savedForm.email;
  }

  if (savedForm.message) {
    textareaEl.value = savedForm.message;
    formDate.message = savedForm.message;
  }
}
