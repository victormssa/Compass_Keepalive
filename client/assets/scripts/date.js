let today = new Date();
let date = today.getDate();
monName = new Array(
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro"
);
weekName = new Array(
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado"
);
month = monName[today.getMonth()];
day = weekName[today.getDay()];
year = today.getFullYear();

let interval2 = setInterval(calendar, 1000);
function calendar() {
  document.getElementById("date").textContent =
    day + ", " + date + " de " + month + " de " + year;
}
