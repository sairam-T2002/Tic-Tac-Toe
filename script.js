const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
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
    } else if (
      boxes[a].textContent === "O" &&
      boxes[b].textContent === "O" &&
      boxes[c].textContent === "O"
    ) {
      document.querySelector(".start").textContent = "O is the winner🤑";
      document.body.style.backgroundColor = "#32b354";
    }
  }
}
//
box1.addEventListener("click", function () {
  if (box1.textContent === "") {
    if (xoro % 2 === 0) {
      box1.textContent = "X";
      xoro++;
      checkWin();
    } else if (xoro % 2 !== 0) {
      box1.textContent = "O";
      xoro++;
      checkWin();
    }
  }
});
//
box2.addEventListener("click", function () {
  if (box2.textContent === "") {
    if (xoro % 2 === 0) {
      box2.textContent = "X";
      xoro++;
      checkWin();
    } else if (xoro % 2 !== 0) {
      box2.textContent = "O";
      xoro++;
      checkWin();
    }
  }
});
//
box3.addEventListener("click", function () {
  if (box3.textContent === "") {
    if (xoro % 2 === 0) {
      box3.textContent = "X";
      xoro++;
      checkWin();
    } else if (xoro % 2 !== 0) {
      box3.textContent = "O";
      xoro++;
      checkWin();
    }
  }
});
//
box4.addEventListener("click", function () {
  if (box4.textContent === "") {
    if (xoro % 2 === 0) {
      box4.textContent = "X";
      xoro++;
      checkWin();
    } else if (xoro % 2 !== 0) {
      box4.textContent = "O";
      xoro++;
      checkWin();
    }
  }
});
//
box5.addEventListener("click", function () {
  if (box5.textContent === "") {
    if (xoro % 2 === 0) {
      box5.textContent = "X";
      xoro++;
      checkWin();
    } else if (xoro % 2 !== 0) {
      box5.textContent = "O";
      xoro++;
      checkWin();
    }
  }
});
//
box6.addEventListener("click", function () {
  if (box6.textContent === "") {
    if (xoro % 2 === 0) {
      box6.textContent = "X";
      xoro++;
      checkWin();
    } else if (xoro % 2 !== 0) {
      box6.textContent = "O";
      xoro++;
      checkWin();
    }
  }
});
//
box7.addEventListener("click", function () {
  if (box7.textContent === "") {
    if (xoro % 2 === 0) {
      box7.textContent = "X";
      xoro++;
      checkWin();
    } else if (xoro % 2 !== 0) {
      box7.textContent = "O";
      xoro++;
      checkWin();
    }
  }
});
//
box8.addEventListener("click", function () {
  if (box8.textContent === "") {
    if (xoro % 2 === 0) {
      box8.textContent = "X";
      xoro++;
      checkWin();
    } else if (xoro % 2 !== 0) {
      box8.textContent = "O";
      xoro++;
      checkWin();
    }
  }
});
//
box9.addEventListener("click", function () {
  if (box9.textContent === "") {
    if (xoro % 2 === 0) {
      box9.textContent = "X";
      xoro++;
      checkWin();
    } else if (xoro % 2 !== 0) {
      box9.textContent = "O";
      xoro++;
      checkWin();
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "gray";
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  box5.innerHTML = "";
  box6.innerHTML = "";
  box7.innerHTML = "";
  box8.innerHTML = "";
  box9.innerHTML = "";
  document.querySelector(".start").innerHTML = "Start the game";
  xoro = 0;
});
