import "./styles.css";
import { hitApi } from "./api.js";

const form = document.querySelector('form');
const button = document.querySelector('button');
let userLocation = document.getElementById('location');
const error = document.querySelector('.error');
const network = document.querySelector('.network');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let userLocationTrimed = userLocation.value.trim();
  if(userLocationTrimed === '') {
      // Toggles the active and prevent the user from submitting an empty string
    error.classList.toggle('active');
    error.textContent = "The field above can't be left empty!";
    return
  } else {
    network.style.display = 'block';
    network.classList.toggle('loading');
    network.style.color = 'blue';
    hitApi(userLocationTrimed);
  }
})