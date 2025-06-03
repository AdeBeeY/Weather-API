import "./styles.css";
import { hitApi } from "./api.js";

const form = document.querySelector('form');
const button = document.querySelector('button');
let userLocation = document.getElementById('location');
const error = document.querySelector('.error');
const network = document.querySelector('.network');

button.addEventListener('click', () => {
  let userLocationTrimed = userLocation.value.trim();
  if(userLocationTrimed === '') {
      // Toggles the active and prevent the user from submitting an empty string
    error.classList.toggle('active');
    error.textContent = "The field above can't be left empty!";
    return
  } else {
    console.log(userLocationTrimed)
    network.classList.toggle('loading');
    hitApi(userLocationTrimed);
  }
})

form.addEventListener('click', (e) => {
  e.preventDefault();
} )