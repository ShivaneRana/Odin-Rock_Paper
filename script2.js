//this array will be used to display rock paper and scissor over and over again
const rockpaperscissor = [null,"stone","Paper","Scissor"];

// userscore and computerscore are 0 at start of the game
let userScore = 0;
let computerScore = 0;
let flag = false;

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

//stone paper and scissor button addListner Event
stone.addEventListener("click",() => playRound(1));
paper.addEventListener("click",() => playRound(2));
scissor.addEventListener("click",() => playRound(3));



//first phase of the game
//as a side note coming up with this block of code took an entire day! :(
//hopefully the code will work now just fine(Future me: here this code didnt work at all now i am rewritting it) :(
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
function gameStart1(){
    startGameButton.addEventListener("click",() => {
        if(startGameButton.textContent === "Start Game"){
            textArea.textContent = "uwu1";
            startGameButton.textContent = "Continue";
            userScoreArea.textContent = "User score is displayer here";
            computerScoreArea.textContent = "Computer score is displayed here";
        }else if(startGameButton.textContent === "Continue"){
            textArea.textContent = "uwu2";
            startGameButton.textContent = "Enter the game";
            userScoreArea.textContent = `User score : ${userScore}`;
            computerScoreArea.textContent = `Computer score : ${computerScore}`;
        }else if(startGameButton.textContent === "Enter the game"){
            getUserChoice();
        }   
    });
}


//this function get computer input
function getComputerChoice(){
    let computerChoice = Math.floor((Math.random()*3)+1);
    return +computerChoice;
}

//function to get user Input
function getUserChoice(){
    startGameButton.remove();
    textArea.textContent = "Choose of the following";
    buttonArea.append(stone);
    buttonArea.append(paper)
    buttonArea.append(scissor);
}

//playround funcitonality


//this funtion play a single round
//1 = stone,2 = paper,3 = scissor 
function playRound(num){
    if(flag){
        return;
    }
    console.log("User choose = "+num);
    let computerChoice = getComputerChoice();
    console.log("Computer choose = "+computerChoice);    
    if(computerChoice === num){
        textArea.textContent = "The game was a draw";
        console.log("the game was a draw");
    }else if((num === 1 && computerChoice === 3) || (num === 2 && computerChoice === 1) || (num === 3 && computerChoice === 2)){
        ++userScore
        textArea.textContent = "Player won this round";
        console.log("the player won this round");
    }else{
        ++computerScore
        console.log("Computer won this round");
        textArea.textContent = "Computer won this round";
    }

    updateScore();

    if(userScore === 5 || computerScore === 5){
        displayFinalResult();
        flag = true;
    }
}


//function to update score every round
function updateScore(){
    computerScoreArea.textContent = `Computer score ${computerScore}`;
    userScoreArea.textContent = `Computer score ${userScore}`;
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

//Ending game message
function meassageAtGameEnd(){
}


gameStart1()