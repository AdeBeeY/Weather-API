export { renderWeatherCondition };
const display = document.querySelector('.display');

function renderWeatherCondition(data) {
  if(data === 'clear' || data === 'sunny') {
    display.style = "background-color: #87CEEB";
  } else if(data === 'mostly sunny' || data === 'partly cloudy') {
    display.style = "background-color: #87CEFA";
  } else if(data === 'cloudy' || data === 'overcast') {
    display.style = "background-color: #D3D3D3";
  } else if(data === 'rain' || data === 'rainy') {
    display.style = "background-color: #808080";
  } else if(data === 'showers' || data === 'scattered rain') {
    display.style = "background-color: #4682B4";
  } else if(data === 'thunderstorm' || data === 'thunder' || data === 'storm') {
    display.style = "background-color: #2F4F4F";
  } else if(data === 'snow' || data === 'snowy') {
    display.style = "background-color: #E0FFFF";
  } else if(data === 'windy' || data === 'wind') {
    display.style = "background-color: #A9A9A9";
  } else if(data === 'foggy' || data === 'misty') {
    display.style = "background-color: #F5F5F5";
  } else if(data === 'tornado' || data === 'cyclone' || data === hurrican) {
    display.style = "background-color: #000000";
    document.body.style = "color: #ffffff";
  } else if(data === 'hot' || data === 'heatwave') {
    display.style = "background-color: #FF4500";
  } else if(data === 'cold' || data === 'freezing') {
    display.style = "background-color: #ADD8E6";
  } else if(data === 'dust storm' || data === 'hazy') {
    display.style = "background-color: #D2B48C";
  } else if(data === 'after rain' || data === 'rainbow') {
    display.style = "background-color: #87CEEB";
  }
}