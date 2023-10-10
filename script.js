"use strict";

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //theres no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number!";

    //when player win
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🏆 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("body").style.transition = "ease 1s";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.transition = "ease 0.5s";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } // when players lose with a greater number
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lose the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "firebrick";
      document.querySelector("body").style.transition = "ease 0.5s";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.transition = "ease 1s";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.transition = "ease 0.5s";
});
