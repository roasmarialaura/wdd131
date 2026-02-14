
const placeData = {
  "Area": "86,600 sq km",
  "Population": "10.3 million",
  "Capital": "Baku",
  "Language": "Azerbaijani",
  "Currency": "Azerbaijan Manat (AZN)",
  "Time Zone": "UTC+4",
  "Calling Code": "+994",
  "Internet TLD": ".az"
};

const weatherData = {
  temperature: 15,
  conditions: "Cloudy",
  wind: 26
};
const dataList = document.getElementById("dataList");
const weatherList = document.getElementById("weatherList");
for (let key in placeData) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${key}:</strong> ${placeData[key]}`;
  dataList.appendChild(li);
}
function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}
let windChill = "N/A";
if (weatherData.temperature <= 10 && weatherData.wind > 4.8) {
  windChill = calculateWindChill(weatherData.temperature, weatherData.wind) + " °C";
}
weatherList.innerHTML = `
  <li><strong>Temperature:</strong> ${weatherData.temperature} °C</li>
  <li><strong>Conditions:</strong> ${weatherData.conditions}</li>
  <li><strong>Wind:</strong> ${weatherData.wind} km/h</li>
  <li><strong>Wind Chill:</strong> ${windChill}</li>
`;



const currentYear = document.querySelector('#currentYear');

const lastModified = document.querySelector("#lastModified");

const today = new Date();



document.getElementById("lastModified").innerHTML = document.lastModified;