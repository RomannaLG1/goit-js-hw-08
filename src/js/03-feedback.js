//
const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    button: document.querySelector(".feedback-form button"),
}



refs.form.addEventListener('submit', onFormSubmit);

refs.textarea.addEventListener('input', onTextareaInput);

  console.log(1);
function onFormSubmit(evt) {
     evt.preventDefault();
console.log('send form');

evt.currentTarget.reset();

    
}

function onTextareaInput(evt) {
    const message = evt.currentTarget.value;
    localStorage.setItem('feedback-msg', message);
  
}
