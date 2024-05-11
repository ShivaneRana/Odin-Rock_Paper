/*
function getComputerChoice(){
    let computerChoices = ["Rock","Paper","Scissor"];
    let uwu = Math.random()*3;
    uwu = Math.floor(uwu);
    console.log("Computer choice = "+uwu);
    return computerChoices[uwu];
}

*/

function getUserChoice(){
    let userChoice = prompt("Choose one of the following~\n1.Rock\n2.Paper\n3.Scissor");
    console.log("User Choice"+userChoice);
    return userChoice;
}

let playerScore = 0;
let computerScore = 0;
