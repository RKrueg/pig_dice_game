//PigGame Logic
function PigGame() {
  this.players = [];
  this.currentTurn = 0;
}

PigGame.prototype.addPlayer = function(player) {
  this.players.push(player);
}


//Player Logic
function Player(username, currentScore, totalScore) {
  this.username = username;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

Player.prototype.diceRoll = function() {
  let roll = Math.floor(Math.random() * (6) + 1);
  if (roll === 1) {
    this.currentScore = 0;
    PigGame.switchTurns();
  } else {
  this.currentScore += roll;
  }
}

PigGame.prototype.switchTurns = function() {
  if (this.currentTurn === 0) {
    this.currentTurn = 1;
  } else if (this.currentTurn === 1) {
    this.currentTurn = 0;
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.currentScore;
  this.currentScore = 0;
}

//UI Logic

let pigGame = new PigGame();

function player1Submit(event) {
  event.preventDefault();
  const player1userName = document.querySelector(".player1").value;
  pigGame.addPlayer(player1userName);
  document.querySelector(".player1-userName").innerText = player1userName;
  document.querySelector(".player1").value = null;
}

function player2Submit(event) {
  event.preventDefault();
  const player2userName = document.querySelector(".player2").value;
  pigGame.addPlayer(player2userName);
  document.querySelector(".player2-userName").innerText = player2userName;
  document.querySelector(".player2").value = null;
}

window.addEventListener("load", function () {
  document.querySelector("form#player1Name").addEventListener("submit", player1Submit);
  document.querySelector("form#player2Name").addEventListener("submit", player2Submit);

})