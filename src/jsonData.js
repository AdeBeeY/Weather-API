import { renderWeatherInfo } from "./display";
import { renderWeatherCondition } from "./display-weather-conditions";
export { processJsonData };
const display = document.querySelector('.display');
const form = document.querySelector('form');
const network = document.querySelector('.network');

// Process the JSON() data and return an object of items needed.
async function processJsonData(data) {
  try {
    const resolvedAddress = await data.resolvedAddress;
    const description = await data.days[0].description;
    const conditions = await data.days[0].conditions;
    const datetime = await data.days[0].datetime;
    const feelslike = await data.days[0].feelslike;
    const tempmax = await data.days[0].tempmax;
    const tempmin = await data.days[0].tempmin;
    const temp = await data.days[0].temp;
    const uvindex = await data.days[0].uvindex;
    const icon = await data.days[0].icon;
    
    let weatherInfo = {resolvedAddress, description, conditions, datetime, feelslike, tempmax, tempmin, temp, uvindex, icon};

    renderWeatherCondition(icon);
    renderWeatherInfo(weatherInfo);
  } catch (error) {
    form.style.display = 'none';
    display.textContent = "An error was encountered while processing your data!";
    display.style.color = 'red';
    display.style.fontSize = '25px';
    display.style.display = 'flex';
    display.style.justifyContent = 'center';
    display.style.border = '1px solid red';
    display.style.padding = '10px';
    display.style.backgroundColor = 'white';
    
    network.style.display = 'none';
  }
}