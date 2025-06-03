import { processJsonData } from "./jsonData";
export { hitApi };

const display = document.querySelector('.display');
const form = document.querySelector('form');

async function hitApi(userLocationTrimed) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocationTrimed}?unitGroup=us&key=UZB66CTZTNWD8CMJF6GRG8RE4&contentType=json`, {mode: 'cors'});

    const jsonData = await response.json();
    processJsonData(jsonData);
  } catch(error) {
    // console.log(error);
    form.style.display = 'none';
    display.textContent = "An error was encountered while fetching your data!";
    display.style.color = 'red';
    display.style.marginTop = "50px";
    display.style.fontSize = '25px';
  }
}