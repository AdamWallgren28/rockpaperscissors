
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
            return"You LOST this round!";
        }else if (playerHand == "rock" && computerSelection == "scissors"){
            return"You WON this round!";
        }else if (playerHand == "paper" && computerSelection == "rock"){
            return"You WON this round!";
        }else if (playerHand == "paper" && computerSelection == "scissors"){
            return "You LOST this round!";
        }else if (playerHand == "scissors" && computerSelection == "rock"){
            return"You LOST this round!";
        }else if (playerHand == "scissors" && computerSelection == "paper"){
            return"You WON this round!";
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
    newGameBtn.style.backgroundColor = 'var(--acc-color)';
}

// Bäst av 5
function gameOf5() {
    let resultText = roundResult.textContent;
    if (resultText == "You WON this round!") {
        pScore++;
        playerScore.textContent = pScore;
    } else if (resultText == "You LOST this round!") {
        cScore++;
        compScore.textContent = cScore;
    }

    if (pScore === 3) {
        winner.textContent = "YOU WON!";
        disableButtons();
    } else if (cScore === 3) {
        winner.textContent = "YOU LOST!";
        disableButtons();
    } 
}

// ResetKnapp
function resetGame() {
    location.reload();
}
newGameBtn.addEventListener('click', resetGame);


////////// Dark Mode 

//Darkmode via knapp
let onOff = 'on'
function changeTheme() {
    let tColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');

        if (tColor == 'black') {
            document.documentElement.style.setProperty('--text-color', 'aqua');
            document.documentElement.style.setProperty('--acc-color', 'black');
            document.documentElement.style.setProperty('--bg-color', 'grey');
            document.getElementById('temaKnapp').innerText = 'Light Mode';
        } else {
            document.documentElement.style.setProperty('--text-color', 'black');
            document.documentElement.style.setProperty('--acc-color', 'aquamarine');
            document.documentElement.style.setProperty('--bg-color', 'peachpuff');
            document.getElementById('temaKnapp').innerText = 'Dark Mode';
        }
        onOff = 'off';
  }


//Darkmode via klocka
function tidsTema() {
    if (onOff === 'on'){
        let timma = (new Date()).getHours();

        if (timma >= 6 && timma < 19) { 
            document.documentElement.style.setProperty('--text-color', 'black');
                document.documentElement.style.setProperty('--acc-color', 'aquamarine');
                document.documentElement.style.setProperty('--bg-color', 'peachpuff');
                document.getElementById('temaKnapp').innerText = 'Dark Mode';
        } else { 
            document.documentElement.style.setProperty('--text-color', 'aqua');
            document.documentElement.style.setProperty('--acc-color', 'black');
            document.documentElement.style.setProperty('--bg-color', 'grey');
            document.getElementById('temaKnapp').innerText = 'Light Mode';
        }
    } 
}
tidsTema();
setInterval(tidsTema, 10000); // 10000 milliseconds = 1 minute

