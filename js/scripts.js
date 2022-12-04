function PigGame() {
  this.players = {};
}

function Player(username, currentScore, totalScore) {
  this.username = username;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}
