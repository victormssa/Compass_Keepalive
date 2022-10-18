// Counter
let counter = 600;

//window.onload.href ("../../index.html") = function () {
let interval = setInterval(myCounter, 1000);
function myCounter() {
  if (counter === 0) {
    let r = confirm('Se deseja sair, confirme clicando no botão "OK"');
    if (r == true) {
      window.clearInterval(interval);
      let r2 = confirm(
        'Deseja salvar sua senha e usuário para o proximo login? Confirme clicando em "OK"'
      );
      if (r2 == true) {
        window.location.href = "../../index.html";
      } else if (r2 == false) {
        window.location.href = "../../index.html";
        window.localStorage.clear();
      }
    } else {
      window.clearInterval(interval);
      window.location.reload(true);
    }
  } else {
    document.getElementById("counter2").innerHTML = counter;
    counter--;
    return counter;
  }
  return interval;
}
//};

//document.getElementById("buttonLogout");
//setTimeout(function () {
document.getElementById("buttonLogout").onclick = () => {
  let r3 = confirm('Se deseja sair, confirme clicando no botão "OK"');
  if (r3 == true) {
    let r4 = confirm(
      'Deseja salvar sua senha e usuário para o proximo login? Confirme clicando em "OK"'
    );
    if (r4 == true) {
      window.location.href = "../../index.html";
    } else if (r4 == false) {
      window.location.href = "../../index.html";
      window.localStorage.clear();
    }
  }
}; //}, 10000)
