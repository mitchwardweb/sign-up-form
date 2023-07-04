const cpInput = document.querySelector('#confirm-password');
const passInput = document.querySelector('#password');
const errorMessage = document.querySelector('.error');
const heading = document.querySelector('h3');
const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('.sign-up');
const success = document.querySelector('.success');

function comparePasswords(e){
 let confirmPass = e.target.value;
 let password = passInput.value;

 if (confirmPass !== password) {
    errorMessage.style.display = 'block';
    cpInput.classList.add("invalid");
    console.log('these dont match');
    console.log(confirmPass, password);
 } else {
    errorMessage.style.display = 'none';
    console.log('theses matchc')
 }
}

function showSuccess(e){
    e.preventDefault();
    success.style.display = 'block';
    setTimeout(e.target.submit, 3000);
}

cpInput.addEventListener('input', comparePasswords);
form.addEventListener('submit', showSuccess);