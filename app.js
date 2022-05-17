//variables
let total = 0;
let locked = 0;
let cardArr = [];

//dom elements
const drawnCardDisplay = document.getElementById("drawnCard");
const totalScoreDisplay = document.getElementById("totalScore");

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
    return "You Bust!";
  }
  return "pulled cards: " + cardArr;
};

//event listeners
document.getElementById("drawBtn").addEventListener("click", () => {
  (drawnCardDisplay.innerHTML = combineCards()),
    (totalScoreDisplay.innerHTML = total);
});

document.getElementById("standBtn").addEventListener("click", () => {
  locked = total;
});

document.getElementById("newBtn").addEventListener("click", () => {
  window.location.reload();
});
