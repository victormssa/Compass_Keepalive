const user = document.querySelector('#user');
const password = document.querySelector('#password');
const userIcon = document.querySelector('#user__icon');
const passwordIcon = document.querySelector('#password__icon');

user.addEventListener('click', () => {
    userIcon.classList.add('user__active');
    passwordIcon.classList.add('user__active')
});

password.addEventListener('click', () => {
    userIcon.classList.add('user__active');
    passwordIcon.classList.add('user__active')
});