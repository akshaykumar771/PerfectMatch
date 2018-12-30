var numofSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



init();
function init(){
    //mode button for event listners
    setupModeButtons();
    setUpSquares();
    reset();
}
function setupModeButtons(){
for(var i =0; i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numofSquares =3: numofSquares = 6;
        reset();
    });
}
}

function setUpSquares(){
for(var i =0; i<squares.length;i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to the picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;

        }
        else
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    
    });
} 
reset();
}


function reset(){
    colors = generateRandomColors(numofSquares);
    messageDisplay.textContent = "";
    //pick a new random color from array
    pickedColor = pickColor();
    //chnage colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //change colors of squares
    for(var i=0;i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"; 
            squares[i].style.backgroundColor = colors[i];       
        }
        else{
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    
}
// easyBtn.addEventListener("click", function(){
    
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numofSquares =3;
//     colors = generateRandomColors(numofSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i<squares.length;i++){
//         if(colors[i]){
//         squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display ="none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numofSquares = 6;
//     colors = generateRandomColors(numofSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i<squares.length;i++){
        
//         squares[i].style.backgroundColor = colors[i];
        
//             squares[i].style.display ="block";
        
//     }
// })

resetButton.addEventListener("click", function(){
    reset();
    });


// for(var i =0; i<squares.length;i++){
//     //add click listeners to squares
//     squares[i].addEventListener("click", function(){
//     //grab color of clicked square
//         var clickedColor = this.style.backgroundColor;
//         //compare color to the picked color
//         if(clickedColor === pickedColor){
//             messageDisplay.textContent = "Correct";
//             resetButton.textContent = "Play Again?";
//             changeColor(clickedColor);
//             h1.style.backgroundColor = clickedColor;

//         }
//         else
//         this.style.backgroundColor = "#232323";
//         messageDisplay.textContent = "Try Again";
    
//     });
// } 
function changeColor(color){
    //loop through all arrays
    for(var i=0;i<squares.length; i++){
        //change each color to matxh given color
        squares[i].style.backgroundColor = color;

    }
}
function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors to arr
    //repeat num items
    for(var i = 0; i<num;i++){
        //get random color and push it to arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}
function randomColor(){
    //pick "Red from 0 to 255"
   var r = Math.floor(Math.random() * 256);
    //pick "Red green 0 to 255"
    var g = Math.floor(Math.random() * 256);
    //pick "Red blue 0 to 255"
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";

}