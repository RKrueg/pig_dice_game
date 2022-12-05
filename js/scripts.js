//PigGame Logic
function PigGame() {
  this.players = [];
  this.currentTurn = 0;
}

PigGame.prototype.addPlayer = function(player) {
  this.players.push(player);
}


// Player Logic
function Player(username, currentScore, totalScore) {
  this.username = username;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

Player.prototype.diceRoll = function() {
  let roll = Math.floor(Math.random() * (6) + 1);
  if (roll === 1) {
    this.currentScore = 0;
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

