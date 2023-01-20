// const form = document.getElementById("darts-form");
// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   submitScores();
// });

const player1ScoreEl = document.getElementById("player1-score");
const player2ScoreEl = document.getElementById("player2-score");
const player3ScoreEl = document.getElementById("player3-score");
const player4ScoreEl = document.getElementById("player4-score");

let player1Score = 501;
let player2Score = 501;
let player3Score = 501;
let player4Score = 501;

function showModal() {
    document.getElementById("winner-modal").style.display = "block";
}

document.getElementById("close-modal").addEventListener("click", function(){
    document.getElementById("winner-modal").style.display = "none";
});

function submitScore(playerNum) {
    let scoreEl;
    let score;
    let inputEl;
    switch (playerNum) {
      case 1:
        scoreEl = player1ScoreEl;
        score = player1Score;
        inputEl = document.getElementById("player1-input");
        break;
      case 2:
        scoreEl = player2ScoreEl;
        score = player2Score;
        inputEl = document.getElementById("player2-input");
        break;
      case 3:
        scoreEl = player3ScoreEl;
        score = player3Score;
        inputEl = document.getElementById("player3-input");
        break;
      case 4:
        scoreEl = player4ScoreEl;
        score = player4Score;
        inputEl = document.getElementById("player4-input");
        break;
    }
    score -= Number(inputEl.value);
    scoreEl.textContent = score;
    switch (playerNum) {
      case 1:
        player1Score = score;
        break;
      case 2:
        player2Score = score;
        break;
      case 3:
        player3Score = score;
        break;
      case 4:
        player4Score = score;
        break;
    }
    // check for end of game
    if (score <= 0) {
      let winner = "Player " + playerNum + " wins!";
      document.getElementById("winner-message").innerHTML = winner;
      showModal();
    }
}