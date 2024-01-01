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

function rockPaperScissors(playerSelection, computerSelection){
    let playerHand = playerSelection.toLowerCase();
    if (playerHand == "rock" && computerSelection == "Rock"){
        return "TIE! ...try again!";
    }else if (playerHand == "rock" && computerSelection == "Paper"){
        return "YOU LOSE!";
    }else if (playerHand == "rock" && computerSelection == "Scissors"){
        return "YOU WIN!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(rockPaperScissors(playerSelection, computerSelection));

