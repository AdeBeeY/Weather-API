export { getLocation };

// const link = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/lagos?unitGroup=us&key=UZB66CTZTNWD8CMJF6GRG8RE4&contentType=json';

// const link2 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=UZB66CTZTNWD8CMJF6GRG8RE4${userLocationTrimed}';

async function getLocation(userLocationTrimed) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocationTrimed}?unitGroup=us&key=UZB66CTZTNWD8CMJF6GRG8RE4&contentType=json`, {mode: 'cors'});
    // console.log(response);
    const locationData = await response.json();
    return locationData;
    // console.log(locationData);

  } catch(error) {
    console.log(error)
  }
}