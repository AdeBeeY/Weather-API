export { renderWeatherInfo };

const display = document.querySelector('.display');
const form = document.querySelector('form');
const location = document.querySelector('.weatherLocation');
const description = document.querySelector('.description');
const network = document.querySelector('.network');

async function renderWeatherInfo(data) {
  try {
    const address = document.createElement('div');
    address.textContent = data.resolvedAddress;

    const latitude = document.createElement('div');
    latitude.textContent = `Latitude: ${data.latitude}`;

    const longitude = document.createElement('div');
    longitude.textContent = `Longitude: ${data.longitude}`;

    const conditions = document.createElement('div');
    conditions.textContent = `Conditions: ${data.conditions}`;

    const feelslike = document.createElement('div');
    feelslike.textContent = `Feelslike: ${data.feelslike}`;

    const sunrise = document.createElement('div');
    sunrise.textContent = `Sunrise: ${data.sunrise}`;

    const sunset = document.createElement('div');
    sunset.textContent = `Sunset: ${data.sunset}`;

    const temp = document.createElement('div');
    temp.textContent = `Temp: ${data.temp}`;

    const uvindex = document.createElement('div');
    uvindex.textContent = `UVIndex: ${data.uvindex}`;

    const icon = document.createElement('div');
    icon.textContent = `Icon: ${data.icon}`;
    
    display.classList.toggle('render');
    location.append(address);
    description.append(conditions);
    display.append(latitude, feelslike, sunrise, sunset, temp, uvindex, icon);

    form.style.display = "none";
  } catch (error) {
    form.style.display = 'none';
    display.textContent = "An error was encountered while displaying your weather info!";
    display.style.color = 'red';
    display.style.fontSize = '25px';
  }
}

// async function generateElement(processedJsonData) {
//   let generatedElements = '';

//   await Object.keys(processedJsonData).forEach((key) => {
//     console.log(`${key}: ${processedJsonData[key]}`)
//     let element = `<div>${key}: ${[key]}</div>`;
//     generatedElements += element;
//   })
//   console.log(generatedElements);
// }
