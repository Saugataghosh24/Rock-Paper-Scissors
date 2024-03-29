let userScore= 0;
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara= document.querySelector("#user");
const compScorePara= document.querySelector("#comp");

const genCompChoice= () =>{
    let op=["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random() * 3); // generate random from 0-2 and take their floor value
    return op[randIdx];
}

const drawGame= () =>{
    console.log("Game is drawn");
    msg.innerHTML="Game Draw";
    msg.style.backgroundColor= "black";
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("You win");
        msg.innerText="You Win";
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;  
        compScorePara.innerText= compScore;
        console.log("You loose");
        msg.innerText="You Loose";
        msg.style.backgroundColor= "red";
    }
}

const playGame=(userChoice)=>{
    console.log(userChoice);
    const compChoice= genCompChoice();
    console.log(compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice=== "rock"){
            userWin= compChoice==="paper" ? false : true;
        }
        else if(userChoice=== "paper"){
            userWin= compChoice==="scissors" ? false : true;
        }
        else{
            userWin= compChoice==="rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})