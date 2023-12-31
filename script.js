const boxes = document.querySelectorAll(".hov");
let xoro = 0;
function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < 8; i++) {
    let [a, b, c] = winningCombinations[i];
    if (
      boxes[a].textContent === "X" &&
      boxes[b].textContent === "X" &&
      boxes[c].textContent === "X"
    ) {
      document.querySelector(".start").textContent = "X is the winner🤑";
      document.body.style.backgroundColor = "#32b354";
      for (let j = 0; j < 9; j++) {
        boxes[j].removeEventListener("click", boxEventListener);
      }
    } else if (
      boxes[a].textContent === "O" &&
      boxes[b].textContent === "O" &&
      boxes[c].textContent === "O"
    ) {
      document.querySelector(".start").textContent = "O is the winner🤑";
      document.body.style.backgroundColor = "#32b354";
      for (let j = 0; j < 9; j++) {
        boxes[j].removeEventListener("click", boxEventListener);
      }
    }
  }
}
function boxEventListener() {
  if (this.textContent === "") {
    if (xoro % 2 === 0) {
      this.textContent = "X";
      xoro++;
      checkWin();
    } else if (xoro % 2 !== 0) {
      this.textContent = "O";
      xoro++;
      checkWin();
    }
  }
}
boxes.forEach(box => {
  box.addEventListener("click", boxEventListener);
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "gray";
  for (let i = 0; i < 9; i++) {
    boxes[i].textContent = "";
  }
  document.querySelector(".start").textContent = "Start the game";
  for (let j = 0; j < 9; j++) {
    boxes[j].addEventListener("click", boxEventListener);
  }
  xoro = 0;
});
