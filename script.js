function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
        if (x==0){
            return "Rock";
        }else if(x==1){
            return "Paper";
        }else if (x==2){
            return "Scissors";
        }
}

function playRound(playerSelection, computerSelection){
    let playerHand = playerSelection.toLowerCase();
    if (playerHand == "rock" && computerSelection == "Rock"){
        return "TIE! ...try again!";
    }else if (playerHand == "rock" && computerSelection == "Paper"){
        return "YOU LOSE!";
    }else if (playerHand == "rock" && computerSelection == "Scissors"){
        return "YOU WIN!"
    }else if (playerHand == "paper" && computerSelection == "Rock"){
        return "YOU WIN!";
    }else if (playerHand == "paper" && computerSelection == "Paper"){
        return "TIE! ...try again!";
    }else if (playerHand == "paper" && computerSelection == "Scissors"){
        return "YOU LOSE!";
    }else if (playerHand == "scissors" && computerSelection == "Rock"){
        return "YOU LOSE!";
    }else if (playerHand == "scissors" && computerSelection == "Paper"){
        return "YOU WIN!";
    }else if (playerHand == "scissors" && computerSelection == "Scissors"){
        return "TIE! ...try again!";
    }
}

const playerSelection = prompt("Welcome! Pick: Rock, Paper or Scissors!");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

