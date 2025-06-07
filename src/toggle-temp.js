export { toggleTemperature };

async function toggleTemperature() {
  try {
    let temp = await document.querySelector('.js-temp').textContent.slice(6);
    let tempmax = await document.querySelector('.js-tempmax').textContent.slice(10);
    let tempmin = await document.querySelector('.js-tempmin').textContent.slice(10);
    let feelslike = await document.querySelector('.js-feelslike').textContent.slice(11);
    
    console.log({temp, tempmax, tempmin, feelslike});

    let isFahrenheit = true;

    if(isFahrenheit) {
      let celciusTemp = ((temp - 32) * 5/9).toFixed(0);
      let celciusTempmax = ((tempmax - 32) * 5/9).toFixed(0);
      let celciusTempmin = ((tempmin - 32) * 5/9).toFixed(0);
      let celciusFeelslike = ((feelslike - 32) * 5/9).toFixed(0);
      console.log({celciusTemp, celciusTempmax, celciusTempmin, celciusFeelslike});
      isFahrenheit = false;
      console.log(`isFahrenheit: ${isFahrenheit}`);
    } else {
      let fahrenheitTemp = ((temp * 9/5) + 32).toFixed(0);
      let fahrenheitTempmax = ((tempmax * 9/5) + 32).toFixed(0);
      let fahrenheitTempmin = ((tempmin * 9/5) + 32).toFixed(0);
      let fahrenheitFeelslike = ((feelslike * 9/5) + 32).toFixed(0);
      console.log(fahrenheitTemp, fahrenheitTempmax, fahrenheitTempmin, fahrenheitFeelslike);
      isFahrenheit = true;
      console.log(`isFahrenheit: ${isFahrenheit}`);
    }
  } catch (error) {
    console.log(error);
  }
}