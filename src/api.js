import { processJsonData } from "./jsonData";
export { hitApi };

async function hitApi(userLocationTrimed) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocationTrimed}?unitGroup=us&key=UZB66CTZTNWD8CMJF6GRG8RE4&contentType=json`, {mode: 'cors'});

    const jsonData = await response.json();
    console.log(jsonData);

    processJsonData(jsonData);
  } catch(error) {
    console.log(error)
  }
}