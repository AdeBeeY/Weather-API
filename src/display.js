import { toggleTemperature } from "./toggle-temp";
export { renderWeatherInfo };

const display = document.querySelector('.display');
const display2 = document.querySelector('.display2');
const form = document.querySelector('form');
const location = document.querySelector('.weatherLocation');
const condition = document.querySelector('.condition');
const descriptions = document.querySelector('.description');
const network = document.querySelector('.network');

async function renderWeatherInfo(data) {
  try {
    let html = `
      <div>Date:</div>  <div> ${data.datetime}</div>
      <div>Feelslike:</div>  <div class='js-feelslike'> ${data.feelslike.toFixed(0)}</div>
      <div>Temp:</div>  <div class='js-temp'> ${data.temp.toFixed(0)}</div>
      <div>Temp Max:</div> <div class='js-tempmax'> ${data.tempmax.toFixed(0)}</div>
      <div>Temp Min:</div> <div class='js-tempmin'> ${data.tempmin.toFixed(0)}</div>
      <div>UV Index:</div>  <div> ${data.uvindex}</div>
      <div>Icon:</div> <div> ${data.icon}</div>
    `;

    let html2 = `<button class='js-toggleBtn toggleBtn'>To Celcius</button>`;

    let address = `${data.resolvedAddress}`;
    location.innerHTML = address;

    let conditions = `${data.conditions}`;
    condition.innerHTML = conditions;

    let description = `${data.description}`;
    descriptions.innerHTML = description;
    
    display.classList.toggle('render');
    display.innerHTML = html;
    display2.innerHTML = html2;
    form.style.display = "none"; 
    network.style.display = 'none';

    const toggleBtn = await document.querySelector('.js-toggleBtn');
    toggleBtn.addEventListener('click', () => {
      toggleTemperature();

      if(toggleBtn.textContent === 'To Celcius') {
        toggleBtn.textContent = 'To Fahrenheit'
      } else {
        toggleBtn.textContent = 'To Celcius'
      }
    })
  } catch (error) {
    form.style.display = 'none';
    display.textContent = "An error was encountered while displaying your weather info!";
    display.style.color = 'red';
    display.style.fontSize = '25px';
  }
}