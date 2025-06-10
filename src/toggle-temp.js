export { toggleTemperature };

const form = document.querySelector('form');
const display = document.querySelector('.display');

let isFahrenheit = true;

async function toggleTemperature() {
  try {
    let temp = await document.querySelector('.js-temp');
    let tempmax = await document.querySelector('.js-tempmax');
    let tempmin = await document.querySelector('.js-tempmin');
    let feelslike = await document.querySelector('.js-feelslike');

    if(isFahrenheit) {    
      let fahrenheitTemp = temp.textContent;
      let fahrenheitTempMax = tempmax.textContent;
      let fahrenheitTempMin = tempmin.textContent;
      let fahrenheitFeelsLike = feelslike.textContent;
      
      let celciusTemp = ((fahrenheitTemp - 32) * 5/9).toFixed(0);
      let celciusTempmax = ((fahrenheitTempMax - 32) * 5/9).toFixed(0);
      let celciusTempmin = ((fahrenheitTempMin - 32) * 5/9).toFixed(0);
      let celciusFeelslike = ((fahrenheitFeelsLike - 32) * 5/9).toFixed(0);

      temp.textContent = celciusTemp;
      tempmax.textContent = celciusTempmax;
      tempmin.textContent = celciusTempmin;
      feelslike.textContent = celciusFeelslike;

      isFahrenheit = false;
    } else {
      let celciusTemp = temp.textContent;
      let celciusTempMax = tempmax.textContent;
      let celciusTempMin = tempmin.textContent;
      let celciusFeelsLike = feelslike.textContent;

      let fahrenheitTemp = ((celciusTemp * 9/5) + 32).toFixed(0);
      let fahrenheitTempmax = ((celciusTempMax * 9/5) + 32).toFixed(0);
      let fahrenheitTempmin = ((celciusTempMin * 9/5) + 32).toFixed(0);
      let fahrenheitFeelslike = ((celciusFeelsLike * 9/5) + 32).toFixed(0);
      
      temp.textContent = fahrenheitTemp;
      tempmax.textContent = fahrenheitTempmax;
      tempmin.textContent = fahrenheitTempmin;
      feelslike.textContent = fahrenheitFeelslike;

      isFahrenheit = true;
    }
  } catch (error) {
    form.style.display = 'none';
    display.textContent = "An error was encountered while displaying your weather info!";
    display.style.color = 'red';
    display.style.fontSize = '25px';
  }
}