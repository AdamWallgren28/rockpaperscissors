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

function game(){
    let pScore = 0;
    let cScore = 0;
    let i = 1;

        for (i=1 ; i<6; i++){
            let r=playRound(prompt("Pick: Rock, Paper or Scissors!"), getComputerChoice());
            if (r == "YOU WIN!"){
                pScore++;
                console.log("Runda " + i +":");
                console.log("You: " + pScore + " Computer: " + cScore);
            }else if (r == "YOU LOSE!"){
                cScore++;
                console.log("Runda " + i +":");
                console.log("You: " + pScore + " Computer: " + cScore);
            }else if (r == "TIE! ...try again!"){
                console.log("TIE! ...try again!");
                i--;
            }
            
            if (pScore == 3){
                console.log("YOU WIN!");
                break
            }else if (cScore == 3) {
                console.log("YOU LOOSE");
                break
            }
            
        }
}
game();