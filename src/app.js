import "bootstrap";
import "./style.css";

let timer;
let interval;

function generateRandomCard() {
  const countdown = document.querySelector(".countdown");
  countdown.classList.replace("d-flex", "d-none");
  const card = document.querySelector(".poker-card");
  const suitTop = document.querySelector("#suit-top");
  const suitBottom = document.querySelector("#suit-bottom");
  const number = document.querySelector("#number");

  const suits = [{symbol: "♦", color: "red"}, {symbol: "♥", color: "red"}, {symbol: "♣", color: "black"}, {symbol: "♠", color: "black"}];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  card.classList.replace("d-none", "d-flex");
  suitTop.innerHTML = randomSuit.symbol;
  suitBottom.innerHTML = randomSuit.symbol;
  suitTop.style.color = randomSuit.color;
  suitBottom.style.color = randomSuit.color;
  suitBottom.style.transform = "rotate(180deg)";
  number.innerHTML = randomNumber;
  number.style.color = randomSuit.color;
};

// Function to generate a random card after a n seconds of delay
function generateRandomCardWithDelay(delayInSeconds) {
  // Clear any existing timer
  clearTimeout(timer);
  clearInterval(interval);

  // Hide the card and show the countdown
  const card = document.querySelector(".poker-card");
  const conuntDown = document.querySelector(".countdown");
  card.classList.replace("d-flex", "d-none");
  conuntDown.classList.replace("d-none", "d-flex");

  // Set the countdown duration
  timer = setTimeout(() => {
    generateRandomCard();
  }, (delayInSeconds + 1) * 1000);

  let secondsRemaining = delayInSeconds;
  conuntDown.innerHTML = secondsRemaining;

  // Show countdown
  interval = setInterval(() => {
    if (secondsRemaining > 0) {
      secondsRemaining--;
      conuntDown.innerHTML = secondsRemaining;
    } else {
      conuntDown.innerHTML = "";
      conuntDown.classList.replace("d-flex", "d-none");
      card.classList.replace("d-none", "d-flex");
      clearInterval(timer);
      clearInterval(this);
    }
  }
  , 1000);
}

// Add event listener to the button to generate a random card
document.querySelector("#generate-card").addEventListener("click", generateRandomCard);

// Get the delay input and add event listener to generate a random card after a delay
document.querySelector("#start-timer").addEventListener("click", () => {
  // Clear any existing timer
  clearTimeout(timer);
  clearInterval(interval);

  // Get the delay input value and validate it
  const delayInput = document.querySelector("#duration").value;
  const delayInSeconds = parseInt(delayInput, 10);
  if (!isNaN(delayInSeconds) && delayInSeconds > 0) {
    generateRandomCardWithDelay(delayInSeconds);
  } else {
    alert("Please enter a valid number greater than 0.");
  }
});

// Generate a random card when the page loads
window.onload = generateRandomCard;
