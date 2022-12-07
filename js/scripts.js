function PigGame() {
  this.players = [];
  this.currentTurn = 0;
  this.currentScore = 0;
}

PigGame.prototype.addPlayer = function(player) {
  this.players.push(player);
}

PigGame.prototype.diceRoll = function() {
  let roll = Math.floor(Math.random() * (6) + 1);
  if (roll !== 1) {
    this.currentScore += roll;
  } else {
    this.currentScore = 0;
    pigGame.switchTurns();
  }
}

PigGame.prototype.switchTurns = function () {
  if (this.currentTurn === 0) {
    this.currentTurn = 1;
  } else {
   this.currentTurn = 0;
  }
}

PigGame.prototype.hold = function () {
  if (this.currentTurn === 0) {
  pigGame.players[0].totalScore += pigGame.currentScore;
} else {
  pigGame.players[1].totalScore += pigGame.currentScore;
}
  pigGame.currentScore = 0;
}

function Player (userName) {
  this.userName = userName;
  this.totalScore = 0;
}

let pigGame = new PigGame();

function player1Submit(event) {
  event.preventDefault();
  let player1userName = document.querySelector(".player1").value;
  let newPlayer1 = new Player(player1userName)
  pigGame.addPlayer(newPlayer1);
  document.querySelector(".player1-userName").innerText = player1userName;
  document.querySelector(".player1").value = null;
}

function player2Submit(event) {
  event.preventDefault();
  let player2userName = document.querySelector(".player2").value;
  let newPlayer2 = new Player(player2userName)
  pigGame.addPlayer(newPlayer2);
  document.querySelector(".player2-userName").innerText = player2userName;
  document.querySelector(".player2").value = null;
}

function diceRoll(event) {
  pigGame.diceRoll();
  if (pigGame.currentTurn === 0) {
  document.querySelector(".player1-currentScore").innerText = pigGame.currentScore;
  } else if (pigGame.currentTurn === 1) {
    document.querySelector(".player2-currentScore").innerText = pigGame.currentScore;
  }
  winningScore();
}

function holdScore() {
  pigGame.hold();
  if (pigGame.currentTurn === 0) {
    document.querySelector(".player1-totalScore").innerText = pigGame.players[0].totalScore;
    pigGame.switchTurns()
    } else if (pigGame.currentTurn === 1) {
      document.querySelector(".player2-totalScore").innerText = pigGame.players[1].totalScore;
      pigGame.switchTurns()
    }
}

function winningScore() {
  if (pigGame.players[0].totalScore >= 100) {
    document.querySelector(".winner-p").innerText = "Player 1 Wins!";
    document.querySelector("#winner-div").classList.remove('hidden');
  } else if (pigGame.players[1].totalScore >= 100) {
    document.querySelector(".winner-p").innerText = "Player 2 Wins!";
    document.querySelector("#winner-div").classList.remove('hidden');
  }
}

function newGame() {
  pigGame.players = [];
  pigGame.currentTurn = 0;
  pigGame.currentScore = 0;
  document.querySelector(".player1-userName").innerText = "";
  document.querySelector(".player2-userName").innerText = "";
  document.querySelector(".player1-currentScore").innerText = 0;
  document.querySelector(".player2-currentScore").innerText = 0;
  document.querySelector(".player1-totalScore").innerText = 0;
  document.querySelector(".player2-totalScore").innerText = 0;
  document.querySelector(".winner-p").innerText = "";
  document.querySelector("#winner-div").classList.add('hidden');

}

window.addEventListener("load", function () {
  document.querySelector("form#player1Name").addEventListener("submit", player1Submit);
  document.querySelector("form#player2Name").addEventListener("submit", player2Submit);
  document.querySelector(".rollbtn").addEventListener("click", diceRoll);
  document.querySelector(".holdbtn").addEventListener("click", holdScore);
  document.querySelector(".newGame").addEventListener("click", newGame);
})
