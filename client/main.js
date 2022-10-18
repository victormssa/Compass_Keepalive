const form = document.querySelector("#form_id");
let pError = document.querySelector(".login__error");
const userIcon = document.querySelector("#user__icon");
const passwordIcon = document.querySelector("#password__icon");
const html = document.querySelector(".page__login");
const loginForm = document.querySelector("#continue");
const enterForm = document.getElementById("form__id");
const userInput = enterForm["user"];
const passInput = enterForm["password"];
let saved = true;


  user.addEventListener("focus", () => {
    userIcon.classList.add("user__active");
    passwordIcon.classList.add("user__active");
    userIcon.classList.remove("user__unactive");
    passwordIcon.classList.remove("user__unactive");
  });

  password.addEventListener("focus", () => {
    userIcon.classList.add("user__active");
    passwordIcon.classList.add("user__active");
    userIcon.classList.remove("user__unactive");
    passwordIcon.classList.remove("user__unactive");
  });

  /*user.addEventListener("focusout", () => {
    userIcon.classList.add("user__unactive");
    passwordIcon.classList.add("user__unactive");
    userIcon.classList.remove("user__active");
    passwordIcon.classList.remove("user__active");
  });

  password.addEventListener("focusout", () => {
    userIcon.classList.add("user__unactive");
    passwordIcon.classList.add("user__unactive");
    userIcon.classList.remove("user__active");
    passwordIcon.classList.remove("user__active");
  });*/

// Verificação de senha
document.querySelector("#continue").onclick = () => {
  var un = document.forms["myForm"]["Uname"].value;
  var pw = document.forms["myForm"]["Pass"].value;
  userIcon.classList.add("user__active");
  passwordIcon.classList.add("user__active");

  if (un == "admin" && pw == "admin") {
    window.location.href = "assets/pages/home.html";
  } else {
    user.classList.add("login__error--color");
    password.classList.add("login__error--color");
    pError.innerHTML = "Ops, usuário ou senha inválidos.<br> Tente novamente!";
  }
};

// Submit da Form
document.querySelector("#form__id").onsubmit = (e) => {
  e.preventDefault();
  var un = document.forms["myForm"]["Uname"].value;
  var pw = document.forms["myForm"]["Pass"].value;

  if (un == "admin" && pw == "admin") {
    localStorage.setItem("userLogin", un);
    localStorage.setItem("userPassword", pw);
  }
};

// Continuação de Login
if (saved == true) {
  document.forms["myForm"]["Uname"].value = localStorage.getItem("userLogin");
  document.forms["myForm"]["Pass"].value = localStorage.getItem("userPassword");
}
