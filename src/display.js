import { toggleTemperature } from "./toggle-temp";
export { renderWeatherInfo };

const display = document.querySelector('.display');
const form = document.querySelector('form');
const location = document.querySelector('.weatherLocation');
const condition = document.querySelector('.condition');
const descriptions = document.querySelector('.description');
const network = document.querySelector('.network');

async function renderWeatherInfo(data) {
  try {
    let html = `
      <div>Date: ${data.datetime}</div>
      <div class='js-feelslike'>Feelslike: ${data.feelslike.toFixed(0)}</div>
      <div class='js-temp'>Temp: ${data.temp.toFixed(0)}</div>
      <div class='js-tempmax'>Temp Max: ${data.tempmax.toFixed(0)}</div>
      <div class='js-tempmin'>Temp Min: ${data.tempmin.toFixed(0)}</div>
      <div>UV Index: ${data.uvindex}</div>
      <div>Icon: ${data.icon}</div>
      <button class='js-toggleBtn'>Switch to Celcius</button>
    `;

    let address = `${data.resolvedAddress}`;
    location.innerHTML = address;

    let conditions = `${data.conditions}`;
    condition.innerHTML = conditions;

    let description = `${data.description}`;
    descriptions.innerHTML = description;
    
    display.classList.toggle('render');    
    display.innerHTML = html;
    form.style.display = "none"; 
    network.style.display = 'none';

    const toggleBtn = await document.querySelector('.js-toggleBtn');
    toggleBtn.addEventListener('click', () => {
      toggleTemperature();
    })
  } catch (error) {
    form.style.display = 'none';
    display.textContent = "An error was encountered while displaying your weather info!";
    display.style.color = 'red';
    display.style.fontSize = '25px';
  }
}