"use strict";

//variables
let total = 0;
let locked = 0;
let cardArr = [];
let dealerArr = [];

//dom elements
const drawnCardDisplay = document.getElementById("drawnCard");
const totalScoreDisplay = document.getElementById("totalScore");
const drawBtn = document.getElementById("drawBtn");
const dealerScoreElement = document.getElementById("dealerScore");
const gameResultElement = document.getElementById("gameResult");
const dealerDrawnElement = document.getElementById("dealerDrawnCard");

//very simple function, to get random 'card' can be made more complex
const getRandomCard = () => {
  return Math.floor(Math.random() * 11 + 1);
};

//pull a card, adds it to array and checks for >21
const combineCards = () => {
  let pull = getRandomCard();
  cardArr.push(pull);
  total += pull;
  if (total > 21) {
    total = "Try Again";
    drawBtn.setAttribute("disabled", true);
    return "You Bust!";
  }
  return "your pulled cards: " + cardArr;
};

//dealer bot
const dealer = () => {
  let dealerTotal = 0;
  while (dealerTotal < total && dealerTotal <= 21) {
    const pulled = getRandomCard();
    dealerTotal += pulled;
    dealerArr.push(pulled);
    dealerDrawnElement.innerHTML = "dealer pulled cards: " + dealerArr;
    dealerScoreElement.innerHTML = dealerTotal;
    setTimeout(1000);
  }
  if (dealerTotal > 21) {
    gameResultElement.innerHTML = "Dealer bust, you win!";
    return;
  }
  if (dealerTotal == total) {
    gameResultElement.innerHTML = "Tie game!";
    return;
  }

  gameResultElement.innerHTML = "Dealer Wins!";
  return;
};

//event listeners
document.getElementById("drawBtn").addEventListener("click", () => {
  (drawnCardDisplay.innerHTML = combineCards()),
    (totalScoreDisplay.innerHTML = total);
});

document.getElementById("standBtn").addEventListener("click", () => {
  locked = total;
  drawBtn.setAttribute("disabled", true);
  dealer();
});

document.getElementById("newBtn").addEventListener("click", () => {
  window.location.reload();
});
