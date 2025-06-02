export { renderWeatherInfo };

const display = document.querySelector('.display');
const form = document.querySelector('form');

async function renderWeatherInfo(data) {
  try {
    const address = document.createElement('div');
    address.textContent = data.resolvedAddress;

    const latitude = document.createElement('div');
    latitude.textContent = `Latitude: ${data.latitude}`;

    const longitude = document.createElement('div');
    longitude.textContent = `Longitude: ${data.longitude}`;

    const conditions = document.createElement('div');
    conditions.textContent = `Conditions: ${data.currentConditions.conditions}`;

    const feelslike = document.createElement('div');
    feelslike.textContent = `Feelslike: ${data.currentConditions.feelslike}`;

    const sunrise = document.createElement('div');
    sunrise.textContent = `Sunrise: ${data.currentConditions.sunrise}`;

    const sunset = document.createElement('div');
    sunset.textContent = `Sunset: ${data.currentConditions.sunset}`;

    const temp = document.createElement('div');
    temp.textContent = `Temp: ${data.currentConditions.temp}`;

    const uvindex = document.createElement('div');
    uvindex.textContent = `UVIndex: ${data.currentConditions.uvindex}`;

    const icon = document.createElement('div');
    icon.textContent = `Icon: ${data.currentConditions.icon}`;

    display.append(address, latitude, conditions, feelslike, sunrise, sunset, temp, uvindex, icon);
    form.style.display = "none";
  } catch (error) {
    console.log(error);
  }
}