import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const KEY_LOCAL = 'feedback-form-state';
let dataUser = localStorage.getItem(KEY_LOCAL);
dataUser = dataUser ? JSON.parse(dataUser) : {};

populateTextarea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

// textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(KEY_LOCAL);
  evt.currentTarget.reset();
}

function onTextareaInput(evt) {
  if (evt.target.name === 'email') {
    dataUser[evt.target.name] = evt.target.value;
  }
  if (evt.target.name === 'message') {
    dataUser[evt.target.name] = evt.target.value;
  }
  localStorage.setItem(KEY_LOCAL, JSON.stringify(dataUser));
}

function populateTextarea() {
  const { email, message } = dataUser;
  if (email) {
    form.elements.email.value = email;
  }
  if (message) {
    form.elements.message.value = message;
  }
}
