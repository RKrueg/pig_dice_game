```
Describe: PigGame();

Test: "It should create a pigGame object with players property"
Code: new PigGame();
Expected Output: {
  this.players = {};
}



Describe: Player();

Test: "It should create a player object with username, currentScore, totalScore."
Code: new Player(littleGuy, 12, 36);
Expected Output: {
  this.username = littleGuy;
  this.currentScore = 12;
  this.totalScore = 36;
}

Describe: PigGame.prototype.addPlayer();

Test: "It should add a Player object to to the PigGame object."
Code: PigGame.addPlayer(player);
Expected Output: {
  this.players = {
    this.username = littleGuy;
    ...
  }
}

Describe: PigGame.prototype.diceRoll();

Test: "It should return a random number between 1 and 6."
Code: Player.diceRoll();
Expected Output: a number between 1 and 6

Test: "It should add each dice roll to the players currentScore"
Code: Player.diceRoll();
Expected Output: {
  this.username = littleGuy;
  this.currentScore = updated Score;
}

Test: "It should make currentScore = 0 if a 1 is rolled."
Code: Player.diceRoll();
Expected Output: {
  this.username = littleGuy;
  this.currentScore = 0;
}

Describe: Player.prototype.hold();

Test: "It should add currentScore to totalScore and reset currentScore to 0."
Code: Player.hold()
Expected Output: {
  this.totalScore = totalScore + currentScore;
  this.currentScore = 0;
}
```