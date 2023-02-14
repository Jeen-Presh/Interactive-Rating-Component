const userRadioInput = document.querySelectorAll(".rating-input");
const button = document.querySelector(".btn");
const cardRatingState = document.querySelector(".card--rating-state");
const cardThankYouState = document.querySelector(".card--thank-you-state");
const selectedInput = document.querySelector(".selected-input");

let UserInput;

// Removes disabled attribute from button
userRadioInput.forEach(function (key) {
  key.addEventListener("click", function () {
    UserInput = key.value;
    button.removeAttribute("disabled");
  });
});

// Button functionality
button.addEventListener("click", function (e) {
  //   Removes hidden class
  cardRatingState.classList.toggle("hidden");

  //   adds hidden class
  cardThankYouState.classList.toggle("hidden");

  // Selected input from user
  selectedInput.textContent = UserInput;

  e.preventDefault();
});
