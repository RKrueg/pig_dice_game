//PigGame Logic
function PigGame() {
  this.players = {};
  this.currentId = 0;
}

PigGame.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.username] = player;
}

PigGame.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
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
    //switchTurn();
  } else {
  this.currentScore += roll;
  }
  //this.totalScore += currentScore;
}

function switchTurns() {
  
}

