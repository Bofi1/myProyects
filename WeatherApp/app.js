let searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    getWeatherApi();
  }
});

let url = "http://api.openweathermap.org/data/2.5/weather?q=";
let key = "b3a06a3c64c82b438ac9b0b5c93fa703";

let world = document.getElementById("world");

function getWeatherApi() {
  world.classList.add("hidden");
  fetch(`${url}${searchBar.value}&appid=${key}&units=metric`)
    .then((res) => res.json())
    .then((data) => sendToDom(data));
}

let months = [
  "Yan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let city = document.getElementById("city");
let todayDate = document.getElementById("date");
let temp = document.getElementById("temp");
let desc = document.getElementById("description");
let hum = document.getElementById("humidity");
let main = document.getElementById("main");

// searchBar.value = "New York";
// getWeatherApi();

function sendToDom(data) {
  city.innerText = `${data.name}, ${data.sys.country}`;
  showActualDate();
  temp.innerText = `${Math.round(data.main.temp)}°c`;
  desc.innerText = data.weather[0].description;
  hum.innerText = `humidity: ${data.main.humidity}%`;
}

function showActualDate() {
  let date = new Date();
  let actualDate = `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  todayDate.innerText = actualDate;
}
