//this array will be used to display rock paper and scissor over and over again
const rockpaperscissor = [null,"stone","Paper","Scissor"];

// userscore and computerscore are 0 at start of the game
let userScore = 0;
let computerScore = 0;

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


//stone paper scissor button functionality
stone.textContent = "Stone";
paper.textContent = "Paper";
scissor.textContent = "Scissor";


//first phase of the game
//as a side note coming up with this block of code took an entire day! :(
//hopefully the code will work now just fine(Future me here this code didnt work at all now i am rewritting it)
// function gameStart1(){
//     startGameButton.addEventListener("click",() =>{
//     textArea.textContent = "uwu1";
//     computerScoreArea.textContent = "Computer Score area shown here";
//     userScoreArea.textContent = "user score are shown here";
//     startGameButton.textContent = "continue";
//     startGameButton.addEventListener("click",() => {
//         textArea.textContent = "uwu2";
//         computerScoreArea.textContent  = "Computer score: "+computerScore;
//         userScoreArea.textContent = "Player Score: "+userScore;
//         startGameButton.textContent = "Enter the game";
//         startGameButton.addEventListener("click",displayFinalResult);
//     })
// })};

//gamestart1 function rewritten code

//this function get computer input
function getComputerChoice(){
    let computerChoice = Math.floor((Math.random()*3)+1);
    textArea.textContent = `Computer choose ${rockpaperscissor[computerChoice]}`;
    console.log(`Computer choose ${rockpaperscissor[computerChoice]}`);
    return computerChoice;
}

//this funtion play a single round
//1 = stone,2 = paper,3 = scissor 
function playRound(num){
    let userChoice = num;
    let computerChoice = getComputerChoice;
    
    if(userChoice === num){
        textArea.textContent = "The game was a draw";
        console.log("the game was a draw");
    }else if(userChoice === 1 && computerChoice === 3){
        ++userScore
        textArea.textContent = "Player won this round";
        console.log("the player won this round");
    }else if(userChoice === 2 && computerChoice === 1){
        ++userScore
        textArea.textContent = "Player won this round";
        console.log("the player won this round");
    }else if(userChoice === 3 && computerChoice === 2){
        ++userScore
        textArea.textContent = "Player won this round";
        console.log("the player won this round");
    }else{
        ++computerScore
        textArea.textContent = "Computer won this round";
        console.log("Computer won this round");
    }
}

//this function compare score between user and the computer
function displayFinalResult(){
    if(userScore === computerScore){
        textArea.textContent = "The game was a draw";
    }else if(userScore > computerScore){
        textArea.textContent = "Player won the game";
    }else if(computerScore> userScore){
        textArea.textContent = "Computer won the game";
    }else{
        textArea.textContent = "The game broke";
    }
}

gameStart1()