
// Definerar knappar
let rockBtn = document.querySelector('#rockBtn');
let paperBtn = document.querySelector('#paperBtn');
let scissorBtn = document.querySelector('#scissorBtn');
let newGameBtn = document.querySelector('#newGameBtn');
// Definerar variabler
let pScore = 0;
let cScore = 0;
// Definerar display för resultat
let roundResult = document.querySelector('#roundResult');
let playerScore = document.querySelector('#playerScore');
let compScore = document.querySelector('#compScore');
let winner = document.querySelector('#winner');

// Generera datorns val
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

// Omgånsresultat baserat på klientval (och dators val)
function playRound(playerSelection, computerSelection){
    let playerHand = playerSelection.toLowerCase();
        if (playerHand == "rock" && computerSelection == "paper"){
            return"YOU LOSE!";
        }else if (playerHand == "rock" && computerSelection == "scissors"){
            return"YOU WIN!";
        }else if (playerHand == "paper" && computerSelection == "rock"){
            return"YOU WIN!";
        }else if (playerHand == "paper" && computerSelection == "scissors"){
            return "YOU LOSE!";
        }else if (playerHand == "scissors" && computerSelection == "rock"){
            return"YOU LOSE!";
        }else if (playerHand == "scissors" && computerSelection == "paper"){
            return"YOU WIN!";
        } else if (playerHand == computerSelection) {
            return "TIE! ...try again!";
        }
}

// Spelknappar
rockBtn.addEventListener('click', function () {
    roundResult.textContent = '';
    setTimeout(function() {
        roundResult.textContent = playRound('rock', getComputerChoice());
        gameOf5();
    }, 50);
});
paperBtn.addEventListener('click', function () {
    roundResult.textContent = '';
    setTimeout(function() {
        roundResult.textContent = playRound('paper', getComputerChoice());
        gameOf5();
    }, 50);
});
scissorBtn.addEventListener('click', function () {
    roundResult.textContent = '';
    setTimeout(function() {
        roundResult.textContent = playRound('scissors', getComputerChoice());
        gameOf5();
    }, 50);
});


// Stänger av spelknappar
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    newGameBtn.style.backgroundColor = 'aquamarine';
}

// Bäst av 5
function gameOf5() {
    let resultText = roundResult.textContent;
    if (resultText == "YOU WIN!") {
        pScore++;
        playerScore.textContent = pScore;
    } else if (resultText == "YOU LOSE!") {
        cScore++;
        compScore.textContent = cScore;
    }

    if (pScore === 3) {
        winner.textContent = "YOU WON!";
        disableButtons();
    } else if (cScore === 3) {
        winner.textContent = "YOU LOST...";
        disableButtons();
    } 
}

// ResetKnapp
function resetGame() {
    location.reload();
}
newGameBtn.addEventListener('click', resetGame);