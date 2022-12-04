//PigGame Logic
function PigGame() {
  this.players = {};
}

PigGame.prototype.addPlayer = function(player) {
  this.players[player.username] = player;
}

// Player Logic
function Player(username, currentScore, totalScore) {
  this.username = username;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

Player.prototype.diceRoll = function () {
  let roll = Math.floor(Math.random() * (6) + 1);
  //return roll;
  if (roll === 1) {
    this.currentScore = 0;
  } else {
  this.currentScore += roll;
  }
  //this.totalScore += currentScore;
}

