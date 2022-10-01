
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  button: document.querySelector('.feedback-form button'),
};

const formData = {};
populateTextarea();


refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));


refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.textarea.value === "" || refs.input.value === "") {
    return alert("Dear Catherine, please fill in all the fields!");
  }
 
  evt.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY, JSON.stringify(formData)));

}

function onFormInput() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    Object.entries(savedMessage).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}

