"use strict";

//variables
let balance = 1000.0;
let total = 0;
let locked = 0;
let bet = 0;
let cardArr = [];
let dealerArr = [];

//dom elements
const drawnCardDisplay = document.getElementById("drawnCard");
const totalScoreDisplay = document.getElementById("totalScore");
const drawBtn = document.getElementById("drawBtn");
const dealerScoreElement = document.getElementById("dealerScore");
const gameResultElement = document.getElementById("gameResult");
const dealerDrawnElement = document.getElementById("dealerDrawnCard");
const balanceElement = document.getElementById("balanceId");
const currentBet = document.getElementById("currentBetId");
const standBtn = document.getElementById("standBtn");

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
        //setTimeout(1000);
    }
    if (dealerTotal > 21) {
        gameResultElement.innerHTML = "Dealer bust, you win!";
        balance+=(bet*2);
        return;
    }
    if (dealerTotal == total) {
        gameResultElement.innerHTML = "Tie game!";
        balance+=bet;
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
    standBtn.setAttribute("disabled", true);
    locked = total;
    drawBtn.setAttribute("disabled", true);
    dealer();
});

document.getElementById("newBtn").addEventListener("click", () => {
    cardArr = [];
    dealerArr = [];
    total = 0;

    drawnCardDisplay.innerHTML = "";
    totalScoreDisplay.innerHTML = "";
    dealerScoreElement.innerHTML = "";
    gameResultElement.innerHTML = "";
    dealerDrawnElement.innerHTML = "";

    standBtn.removeAttribute("disabled");
    drawBtn.removeAttribute("disabled");
    bet = 0;
    currentBet.innerHTML = 0;
    balanceElement.innerHTML= balance;
});

document.getElementById("add1Btn").addEventListener("click", () => {
    bet += 1;
    balance-=1;
    currentBet.innerHTML = bet;
    balanceElement.innerHTML = balance;
    
});