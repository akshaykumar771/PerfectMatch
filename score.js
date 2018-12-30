var p1btn = document.querySelector("#p1");
var p2btn = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1score = 0;
var p2score = 0;
var p1display = document.querySelector("#player1display");
var p2display = document.querySelector("#player2display");
var winningscoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");
var gameover = false;
var winningScore = 5;


p1btn.addEventListener("click", function(){
    if(!gameover)
    {
    p1score++;
    if(p1score===winningScore){
        p1display.classList.add("winner");
        gameover= true;
    }
    p1display.textContent = p1score;
    }
});

p2btn.addEventListener("click", function(){
    if(!gameover)
    {
    p2score++;
    if(p2score===winningScore){
        p2display.classList.add("winner");
        gameover= true;
    }
    p2display.textContent = p2score;
}
});
resetButton.addEventListener("click", function(){
    reset();
});
function reset(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
}
numInput.addEventListener("change", function(){
        winningscoreDisplay.textContent = numInput.value;
        winningScore = Number(numInput.value);
        reset();
});