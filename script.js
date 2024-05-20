//element at index 0 is null so that when user choose 1 it show rock and not paper.
let rockPaperScissor = [null,"Rock","Paper","Scissor"]; 

//this function gets computer input
function getComputerChoice(){
    let uwu = Math.floor((Math.random()*3)+1);
    console.log("Computer choice = "+uwu+` (${rockPaperScissor[uwu]})`);
    return +uwu;
}

//this function gets user input
function getUserChoice(){
    let userChoice = prompt("Choose one of the following~\n1.Rock\n2.Paper\n3.Scissor");
    console.log("User Choose = "+userChoice+`  (${rockPaperScissor[userChoice]})`);
    return +userChoice;
}

//this function basically is responsible for running of the game 5 times and storing each win in a variable of which at last it check who won tha game
function playGame(){

    console.log("Welcome to the RockPaperScissor Tournament\nLet's Start this game\n\n\n\n");
    
    let playerScore = 0;
    let computerScore = 0;
    
        //this function plays one round between computer and user
        function playRound(humanChoice,computerChoice){
            let human = humanChoice();
            let comp = computerChoice();

            

            function displayComputerChoice(comp){
                if(comp === 1){
                    alert("Computer choose Rock!");
                }else if(comp === 2){
                    alert("computer choose Paper!");
                }else if(comp === 3){
                    alert("Computer choose Scissor!");
                }
            }
            
            
            displayComputerChoice(comp);

            //1 = rock,2 = paper,3 = scissor.
            if(comp === human){
                console.log("Draw!No points were added to neither of contestent"+`\nUser Score = ${playerScore}\nComputer Score = ${computerScore}`);
                alert("Draw!No points were added to neither of contestent"+`\nUser Score = ${playerScore}\nComputer Score = ${computerScore}`);
            }else if(comp === 1 && human === 2){
                playerScore++;
                console.log("User Win! Paper beats Rock.");
                alert("User Win! Paper beats Rock."+`\nUser Score = ${playerScore}\nComputer Score = ${computerScore}`);
            }else if(comp === 2 && human === 3){
                playerScore++;
                console.log("User Win! Scissor beats Paper");
                alert("User Win! SCissor beats Paper"+`\nUser Score = ${playerScore}\nComputer Score = ${computerScore}`);
            }else if(comp === 3 && human === 1){
                playerScore++;
                console.log("User Win! Rock beats Scissor");
                alert("User Win! Rock beats Scissor"+`\nUser Score = ${playerScore}\nComputer Score = ${computerScore}`);    
            }else if(human === null || human === undefined || human === ""){
                computerScore++;
                console.log("Computer Wins! Since the User input is unclear");
                alert("Computer Wins! Since the User input is unclear"+`\nUser Score = ${playerScore}\nComputer Score = ${computerScore}`);
            }else{
                computerScore++;
                console.log(`Computer Win!${rockPaperScissor[comp]} beats ${rockPaperScissor[human]}`);
                alert(`Computer Win!${rockPaperScissor[comp]} beats ${rockPaperScissor[human]}`+`\nUser Score = ${playerScore}\nComputer Score = ${computerScore}`);
            }}
    
    for(let i = 0;i<5;i++){
        playRound(getUserChoice,getComputerChoice);
        console.log("-".repeat(50));
    }
    
    console.log("Player Score = "+playerScore);
    console.log("Computer Score = "+computerScore);
    if(playerScore>computerScore){
        console.log("User Won!");
        alert("User Won!");
    }else if(computerScore>playerScore){
        console.log("Computer Won!");
        alert("Computer Won!");
    }else{
        console.log("The game was a draw");
        alert("The game was draw");
    }
}

playGame()