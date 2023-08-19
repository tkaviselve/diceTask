const players = document.querySelectorAll(".player");
const diceImage = document.getElementById("dice-image");
const player1RollDiceButton = document.getElementById("player1-roll-dice");
const player2RollDiceButton = document.getElementById("player2-roll-dice");
const reStart = document.getElementById("restart-game");
const whoplay = document.getElementById("whoplay");
const player1 = document.getElementById("player1-score");
const player2 = document.getElementById("player2-score");
const winner = document.getElementById("winner");

let playerScores = [0, 0];
player1RollDiceButton.disabled = false;
whoplay.innerText = "Player-1 to play";
player1RollDiceButton.style.backgroundColor = "green";
player2RollDiceButton.disabled = true;
player2RollDiceButton.style.backgroundColor = "grey";

player1RollDiceButton.addEventListener("click", function () {
  player2RollDiceButton.disabled = false;
  player2RollDiceButton.style.backgroundColor = "green";

  player1RollDiceButton.disabled = true;
  player1RollDiceButton.style.backgroundColor = "grey";
  whoplay.innerText = "Player-2 to play";

  const randomNumber = Math.floor(Math.random() * 6) + 1;
  diceImage.src = `img/dice-${randomNumber}.png`;
  playerScores[0] += randomNumber;
  player1.innerText = playerScores[0];

  if (player1.innerText >= 30) {
    winner.innerText = "Player 1 Wins";

    player1RollDiceButton.disabled = true;
    player2RollDiceButton.disabled = true;
    player2RollDiceButton.style.backgroundColor = "grey";
  }
});

player2RollDiceButton.addEventListener("click", function () {
  player1RollDiceButton.disabled = false;
  player1RollDiceButton.style.backgroundColor = "green";

  whoplay.innerText = "Player-1 to play";
  player2RollDiceButton.disabled = true;
  player2RollDiceButton.style.backgroundColor = "grey";

  const randomNumber = Math.floor(Math.random() * 6) + 1;
  diceImage.src = `img/dice-${randomNumber}.png`;
  playerScores[1] += randomNumber;
  player2.innerText = playerScores[1];

  if (player2.innerText >= 30) {
    winner.innerText = "Player 2 wins";

    player1RollDiceButton.disabled = true;
    player2RollDiceButton.disabled = true;
    player1RollDiceButton.style.backgroundColor = "grey";
  }
});

reStart.addEventListener("click", function () {
  location.reload();
});
