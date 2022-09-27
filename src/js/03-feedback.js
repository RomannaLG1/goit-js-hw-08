
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-msg';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  button: document.querySelector('.feedback-form button'),
};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  
  formData[e.target.name] = e.target.value;
  console.log(formData);
})

function onFormSubmit(evt) {
  evt.preventDefault();
 
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
   console.log('send form');
}

function onTextareaInput(evt) {
  // const message = evt.target.value;
  // localStorage.setItem(STORAGE_KEY, message);

  localStorage.setItem(JSON.stringify(formData));
}

function populateTextarea() {
  // const savedMessage = localStorage.getItem(STORAGE_KEY);
  const savedMessage = JSON.parse(localStorage.getItem('formData'));
  if (savedMessage) {
        refs.textarea.value = savedMessage;
        refs.input.value = savedMessage;
  }
  
}
