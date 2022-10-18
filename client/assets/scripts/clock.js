let interval3 = setInterval(clock, 1000);
function clock() {
  let today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  minutes = zero(minutes);
  document.getElementById("hour").textContent = hour + ":" + minutes;

  function zero(x) {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  }
}
