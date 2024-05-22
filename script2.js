//this array will be used to display rock paper and scissor over and over again
const rockpaperscissor = [null,"stone","Paper","Scissor"];

// userscore and computerscore are 0 at start of the game
let userScore = 0;
let computerScore = 0;
let userChoice = null;

//creating new variables
let stone = document.createElement("button");
let paper = document.createElement("button");
let scissor = document.createElement("button");
const textArea = document.querySelector("#textArea");
const buttonArea = document.querySelector("#buttonArea");
const startGameButton = document.querySelector("#startGameButton");
const roundNumber = document.querySelector("#roundNumber");
const computerScoreArea = document.querySelector("#computerScoreArea");
const userScoreArea = document.querySelector("#userScoreArea");


//rock paper scissor button functionality
stone.textContent = "Stone";
paper.textContent = "Paper";
scissor.textContent = "Scissor";


//first phase of the game
//as a side note coming up with this block of code took an entire day! :(
//hopefully the code will work now just fine
function gameStart1(){
    startGameButton.addEventListener("click",() =>{
    textArea.textContent = "uwu1";
    computerScoreArea.textContent = "Computer Score area shown here";
    userScoreArea.textContent = "user score are shown here";
    startGameButton.textContent = "continue";
    startGameButton.addEventListener("click",() => {
        textArea.textContent = "uwu2";
        computerScoreArea.textContent  = "Computer score: "+computerScore;
        userScoreArea.textContent = "Player Score: "+userScore;
        startGameButton.textContent = "Enter the game";
        startGameButton.addEventListener("click",getComputerChoice);
    })
})};

//this function get computer input
function getComputerChoice(){
    let computerChoice = Math.floor((Math.random()*3)+1);
    textArea.textContent = `Computer choose ${rockpaperscissor[computerChoice]}`;
    console.log(`Computer choose ${rockpaperscissor[computerChoice]}`);
    return computerChoice;
}

getComputerChoice()