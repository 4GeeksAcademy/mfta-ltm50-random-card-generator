import "bootstrap";
import "./style.css";

window.onload = function() {
  const card = document.querySelector("#card");
  const suitTop = document.querySelector("#suit-top");
  const suitBottom = document.querySelector("#suit-bottom");
  const number = document.querySelector("#number");

  const suits = [{symbol: "♦", color: "red"}, {symbol: "♥", color: "red"}, {symbol: "♣", color: "black"}, {symbol: "♠", color: "black"}];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  suitTop.innerHTML = randomSuit.symbol;
  suitBottom.innerHTML = randomSuit.symbol;
  suitTop.style.color = randomSuit.color;
  suitBottom.style.color = randomSuit.color;
  suitBottom.style.transform = "rotate(180deg)";
  number.innerHTML = randomNumber;
  number.style.color = randomSuit.color;
};
