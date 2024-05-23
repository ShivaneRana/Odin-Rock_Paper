//this array will be used to display rock paper and scissor over and over again
const rockpaperscissor = [null,"stone","Paper","Scissor"];

// userscore and computerscore are 0 at start of the game
let userScore = 0;
let computerScore = 0;
let flag = false;
let currentRoundNumber = 1; 

//creating new variables
const main = document.querySelector("#main");
let stone = document.createElement("button");
let paper = document.createElement("button");
let scissor = document.createElement("button");
const textArea = document.querySelector("#roundInfo");
const buttonArea = document.querySelector("#buttonArea");
const startGameButton = document.querySelector("#startGameButton");
const roundNumber = document.querySelector("#roundNumber");
const computerScoreArea = document.querySelector("#computerScoreArea");
const userScoreArea = document.querySelector("#userScoreArea");
const scoreArea = document.querySelector("#scoreArea");

//properties for button
startGameButton.style.border = "none"
startGameButton.style.padding = "1.5em"
roundNumber.style.textDecoration = "underline";

//stone paper scissor button functionality
stone.textContent = "Stone";
paper.textContent = "Paper";
scissor.textContent = "Scissor";
scissor.style.border = "none";
paper.style.border = "none";
stone.style.border = "none";
stone.style.padding = "1.5em";
paper.style.padding = "1.5em";
scissor.style.padding = "1.5em";


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
            userScoreArea.style.border = "2px black dashed";
            computerScoreArea.style.border = "2px black dashed";
            textArea.textContent = "A game of rock-paper-scissors with multiple rounds until someone wins a total of five times.";
            startGameButton.textContent = "Continue";
            userScoreArea.textContent = "User score is displayer here";
            computerScoreArea.textContent = "Computer score is displayed here";
        }else if(startGameButton.textContent === "Continue"){
            textArea.textContent = "Are you ready to play?";
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
    textArea.textContent = "Please choose";
    buttonArea.append(stone);
    buttonArea.append(paper)
    buttonArea.append(scissor);
}

//playround funcitonality


//this funtion play a single round
//1 = stone,2 = paper,3 = scissor 
function playRound(num){
    if(flag){

        roundNumber.remove();
        textArea.style.marginTop = "7em";
        //exit button
        const exit = document.createElement("button");
        exit.textContent = "Exit";
        exit.style.border = "none";
        exit.style.padding = "1.5em";
        buttonArea.append(exit);
        exit.addEventListener("click",() => {
            textArea.remove();
            buttonArea.remove();
            scoreArea.remove();
            main.style.color = "black";
            main.style.textAlign = "center";
            main.style.textDecoration = "underline";
            main.textContent = "Reload Webpage to replay the game";
        });
        textArea.textContent = "bye bye!";

        //clean button area
        stone.remove();
        scissor.remove();
        paper.remove();
        return;
    }

    console.log("User choose = "+num);
    let computerChoice = getComputerChoice();
    console.log("Computer choose = "+computerChoice);    
    if(computerChoice === num){
        textArea.textContent = `Computer choose ${rockpaperscissor[computerChoice]} too so, `+"The game was a draw";
        console.log("the game was a draw");
    }else if((num === 1 && computerChoice === 3) || (num === 2 && computerChoice === 1) || (num === 3 && computerChoice === 2)){
        ++userScore
        textArea.textContent = `Computer choose ${rockpaperscissor[computerChoice]} hence, `+"Player won this round";
        console.log("the player won this round");
    }else{
        ++computerScore
        console.log("Computer won this round");
        textArea.textContent =  `Computer choose ${rockpaperscissor[computerChoice]} hence, `+"Computer won this round";
    }

    roundNumber.textContent = "Current round: "+currentRoundNumber++;
    updateScore();

    if(currentRoundNumber === 6){
        stone.remove();
        paper.textContent = "Continue";
        scissor.remove();
    }

    if(currentRoundNumber > 6){
        stone.remove();
        scissor.remove();
        displayFinalResult();
        flag = true;
    }
}


//function to update score every round
function updateScore(){
    computerScoreArea.textContent = `Computer score ${computerScore}`;
    userScoreArea.textContent = `Player score ${userScore}`;
}


//this function compare score between user and the computer
function displayFinalResult(){
    roundNumber.style.backgroundColor = "black";
    roundNumber.style.color = "white";
    roundNumber.textContent = "Game Over";
    roundNumber.style.padding = "1.5em";
    textArea.style.backgroundColor = "black";
    textArea.style.color = "white";
    textArea.style.padding = "1.5em";
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

gameStart1();