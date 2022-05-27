function computerPlay (){
    let options = ['rock', 'paper', 'scissors'];
    computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}


function playerSelection (){
    let playerChoice = prompt("Please type your choice (rock, paper or scissors: ")
    return playerChoice;
}


function playRound (playerSelection, computerPlay){
    console.log(playerSelection, computerPlay);

    if(playerSelection == computerPlay){
       return console.log("It's a Draw!!") 
    } else if (playerSelection == "rock"){
        if (computerPlay == "paper"){
            scorePc ++;
            return console.log(`The computer wins, paper beats rock.`);
        }else {
            scorePlayer ++;
            return console.log("You win rock beats scissors.");
        }
    } else if (playerSelection == "paper"){
        if (computerPlay == "scissors"){
            scorePc ++;
            return console.log(`The computer wins, scissors beats paper.`);
        }else {
            scorePlayer ++;
            return console.log("You win paper beats rock.");
        }
    } else if (playerSelection == "scissors"){
        if (computerPlay == "rock"){
            scorePc ++;
            return console.log(`The computer wins, rock beats scissors.`);
        }else {
            scorePlayer ++;
            return console.log("You win scissors beats paper.");
        }
    }
}

function game (){
    scorePlayer = 0;
    scorePc = 0;

    for(let i = 0; i < 5; i++){
        playRound(playerSelection(),computerPlay());
        console.log(`The score is You = ${scorePlayer} / Pc = ${scorePc}`);
    }

    if (scorePlayer > scorePc){
        console.log("Congratulations you won!");
    } else if (scorePc > scorePlayer){
        console.log("The computer beats you. Good luck next time.");
    }else {
        console.log("It's a draw!!!");
    }
}

let scorePlayer = 0;
let scorePc = 0;


game();