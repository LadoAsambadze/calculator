const rollButton = document.querySelector(".rollButton"); // es ukvashireda 
const mainImage = document.querySelector(".mainImage");
const currentPointOne = document.querySelector(".currentPointOne");
const currentPointTwo = document.querySelector(".currentPointTwo");
const leftDiv = document.querySelector(".leftDiv");
const rightDiv = document.querySelector(".rightDiv");
const holdButton = document.querySelector(".holdButton");
const playerOnePoint = document.querySelector(".playerOnePoint");
const playerTwoPoint = document.querySelector(".playerTwoPoint");

let current = 0; // ეს არის current ის საწყისი მნიშვნელობა
let player = 1; // ეს განსაზღვრავს რომელი მოთამაშის დროა /საწყისად პირველი/

rollButton.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 6) + 1;

  if (random === 1) { // roca random udris 1  
    mainImage.src = "dice-1.png";
    CurrentSum(0);
    ChangePlayer();
  } else if (random === 2) {
    mainImage.src = "dice-2.png";
    CurrentSum(2);
  } else if (random === 3) {
    mainImage.src = "dice-3.png";
    CurrentSum(3);
  } else if (random === 4) {
    mainImage.src = "dice-4.png";
    CurrentSum(4);
  } else if (random === 5) {
    mainImage.src = "dice-5.png";
    CurrentSum(5);
  } else if (random === 6) {
    mainImage.src = "dice-6.png";
    CurrentSum(6);
  }
});

holdButton.addEventListener(
  "click",

  function () {
    if (player === 1) {
      playerOnePoint.textContent = Number(playerOnePoint.textContent) + current;
      current = 0;
      currentPointOne.textContent = current;
    } else if (player === 2) {
      playerTwoPoint.textContent = Number(playerTwoPoint.textContent) + current;

      currentPointTwo.textContent = current;
    }
    current = 0;
    ChangePlayer();
  }
);

function ChangePlayer() {
  if (player === 1) {
    player = 2;
  } else if (player === 2) {
    player = 1;
  }

  if (player === 1) {
    leftDiv.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    rightDiv.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  } else if (player === 2) {
    leftDiv.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    rightDiv.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
}

function CurrentSum(value) {
  if (player === 1) {
    current = current + value;
    currentPointOne.textContent = current;
  } else if (player === 2) {
    current = current + value;
    currentPointTwo.textContent = current;
  }
}

