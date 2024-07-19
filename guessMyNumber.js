let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".btn__check").addEventListener("click", (event) => {
  event.preventDefault();

  const guess = Number(document.querySelector(".numbox").value);
  if (!guess) {
    displayMsg("⛔ No Number!");
  } else if (guess === secretNumber) {
    displayMsg("🎉 Correct Number!");
    document.querySelector(".secret-number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      document.querySelector(
        ".highest"
      ).textContent = `highest score: ${score}`;
      highscore = score;
      console.log(document.querySelector(".highest").textContent);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      displayMsg(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = `score: ${score}`;
    } else {
      displayMsg(`You lose the game!`);

      document.querySelector(".score").textContent = `score: 0`;
    }
  }
  // else if (guess > secretNumber) {
  //   //too high
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = `score: ${score}`;
  //   } else {
  //     document.querySelector(".message").textContent = `You lose the game!`;
  //     document.querySelector(".score").textContent = `score: 0`;
  //   }
  // } else if (guess < secretNumber) {
  //   //too low
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = `score: ${score}`;
  //   } else {
  //     document.querySelector(".message").textContent = `You lose the game!`;
  //     document.querySelector(".score").textContent = `score: 0`;
  //   }
  // }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  //location.reload();
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMsg("Start guessing...");
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".numbox").value = "";
  document.querySelector("body").style.backgroundColor = "#ffffff";
  document.querySelector(".score").textContent = `score: ${score}`;
});
