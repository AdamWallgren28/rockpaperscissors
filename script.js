function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
        if (x==0){
            return "rock";
        }else if(x==1){
            return "paper";
        }else if (x==2){
            return "scissors";
        }
}

function playRound(playerSelection, computerSelection){
    let playerHand = playerSelection.toLowerCase();
    if (playerHand == "rock" && computerSelection == "paper"){
        return "YOU LOSE!";
    }else if (playerHand == "rock" && computerSelection == "scissors"){
        return "YOU WIN!"

    }else if (playerHand == "paper" && computerSelection == "rock"){
        return "YOU WIN!";
    }else if (playerHand == "paper" && computerSelection == "scissors"){
        return "YOU LOSE!";

    }else if (playerHand == "scissors" && computerSelection == "rock"){
        return "YOU LOSE!";
    }else if (playerHand == "scissors" && computerSelection == "paper"){
        return "YOU WIN!";

    }else if (playerHand == computerSelection){
        return "TIE! ...try again!";
    }
}

const playerSelection = prompt("Pick: Rock, Paper or Scissors!");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
