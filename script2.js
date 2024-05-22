//this array will be used to display rock paper and scissor over and over again
const rockpaperscissor = [null,"Rock","Paper","Scissor"];

// userscore and computerscore are 0 at start of the game
let userScore = 0;
let computerScore = 0;
let userChoice = null;

//creating new variables
let rock = document.createElement("button");
let paper = document.createElement("button");
let scissor = document.createElement("button");
const textArea = document.querySelector("#textArea");
const buttonArea = document.querySelector("#buttonArea");
const startGameButton = document.querySelector("#startGameButton");

//rock paper scissor button functionality
rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissor";


//first phase of the game
//as a side note coming up with this block of code took an entire day! :(
//hopefully the code will work now just fine    
startGameButton.addEventListener("click",() =>{
    textArea.textContent = "uwu1";
    startGameButton.textContent = "continue";
    startGameButton.addEventListener("click",() => {
        textArea.textContent = "uwu2";
        startGameButton.textContent = "Enter the game";
        startGameButton.addEventListener("click",playRound);
    })
})

//this will play the game exactly one time
function playRound(){
    textArea.textContent = "the game will start from here";
    startGameButton.remove();
    buttonArea.append(rock)
    buttonArea.append(paper)
    buttonArea.append(scissor);
}