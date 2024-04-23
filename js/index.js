`use strict`;

// Working with the Advice API

const url = `https://api.adviceslip.com/advice`;

// Acessing to the dom elements

const adviceId = document.getElementById(`advice-id`);

const newAdvice = document.getElementById(`random-advice`);

// storing button
const stopBtn = document.getElementById(`btn`);

// Calling funcution to generate random ID

const generateId = function (id) {
  const title = document.createElement(`h1`);
  title.textContent = `Advice #${id}`;
  adviceId.appendChild(title);
};

// Calling funcution to generate random Advice

const generateAdvice = function (advice) {
  const quote = document.createElement(`p`);
  quote.textContent = advice;
  newAdvice.appendChild(quote);
};
// Generating a random API

const randomAdvice = async () => {
  const response = await fetch(url);
  const data = await response.json();

  // Storing Advice Id
  const id = data.slip.id;
  console.log(id);

  // Storing New Advice
  const advice = data.slip.advice;
  console.log(advice);

  // Calling funcutions to update the UI
  generateId(id);
  generateAdvice(advice);
};

// Adding event listener to button

stopBtn.addEventListener(`click`, function (e) {
  // Cleaning previous data
  adviceId.innerHTML = ``;
  newAdvice.innerHTML = ``;

  // calling the random Advice generator
  randomAdvice();
});
