var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var reset = document.getElementById("reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = numInput.value;

function reseti () {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

p1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
    }
    if (p1Score === winningScore) {
        p1Display.classList.add("winner");
        gameOver = true;
    }
    p1Display.textContent = p1Score;
});

p2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
    }
    if (p2Score === winningScore) {
        p2Display.classList.add("winner");
        gameOver = true;
    }
    p2Display.textContent = p2Score;
});

reset.addEventListener("click", function () {
    reseti();
});

numInput.addEventListener("change", function (){
    winningScoreDisplay.textContent= numInput.value;
    winningScore = Number(numInput.value);
    reseti();
});