# 🌍 Location Fetcher with Loading Indicator

This is a simple web application that allows users to input a location and fetch geographic data from an API. It displays a **loading indicator** during the fetch process, making it perfect for testing network delays using browser DevTools.

## ✨ Features

- Collects a location from the user via a form.
- Fetches location data using the [Visual Crossing API ](https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lagos%2CNigeria?unitGroup=us&key=UZB66CTZTNWD8CMJF6GRG8RE4).
- Displays a loading message while waiting for API response.
- Handles and displays both results and error messages.
- Built with **JavaScript, HTML, and CSS**.
- Required devDependencies: {
  "@babel/core": "^7.27.4",
  "@babel/preset-env": "^7.27.2",
  "babel-loader": "^10.0.0",
  "css-loader": "^7.1.2",
  "html-loader": "^5.1.0",
  "html-webpack-plugin": "^5.6.3",
  "style-loader": "^4.0.0",
  "webpack": "^5.99.9",
  "webpack-cli": "^6.0.1",
  "webpack-dev-server": "^5.2.1"
  }
