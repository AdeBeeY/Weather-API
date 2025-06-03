import { renderWeatherInfo } from "./display";
export { processJsonData };
const display = document.querySelector('.display');
const form = document.querySelector('form');

// Process the JSON() data and return an object of items needed.
async function processJsonData(data) {
  try {
    const resolvedAddress = await data.resolvedAddress;
    const latitude = await data.latitude;
    const longitude = await data.longitude;
    const conditions = await data.currentConditions.conditions;
    const feelslike = await data.currentConditions.feelslike;
    const sunrise = await data.currentConditions.sunrise;
    const sunset = await data.currentConditions.sunset;
    const temp = await data.currentConditions.temp;
    const uvindex = await data.currentConditions.uvindex;
    const icon = await data.currentConditions.icon;
    
    let weatherInfo = {resolvedAddress,latitude, longitude, conditions, feelslike, sunrise, sunset, temp, uvindex, icon};

    renderWeatherInfo(weatherInfo);
  } catch (errror) {
    form.style.display = 'none';
    display.textContent = "An error was encountered while processing your data!";
    display.style.color = 'red';
    display.style.fontSize = '25px';
  }
}