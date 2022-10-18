const api = {
  key: "840f14117796724f95909e722e38e198",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "pt_br",
  units: "metric",
};

const city = document.querySelector("#weatherCity");
const container_img = document.querySelector("#weatherIcon");
const temp_number = document.querySelector("#weatherCelsius");

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  } else {
    alert("navegador não suporta geolocalização");
  }
  function setPosition(position) {
    console.log(position);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    coordResults(lat, long);
  }
  function showError(error) {
    alert(`erro: ${error.message}`);
  }
});

function coordResults(lat, long) {
  fetch(
    `${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`http error: status ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      alert(error.message);
    })
    .then((response) => {
      displayResults(response);
    });
}

function searchResults(city) {
  fetch(
    `${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`http error: status ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      alert(error.message);
    })
    .then((response) => {
      displayResults(response);
    });
}

function displayResults(weather) {
  console.log(weather);

  city.innerText = `${weather.name} - ${weather.sys.country}`;

  let iconName = weather.weather[0].icon;
  container_img.innerHTML = `<img src="../icons/${iconName}.png" class="weather__icon">`;

  let temperature = `${Math.round(weather.main.temp)}`;
  temp_number.innerHTML = `${temperature}°`;
}
