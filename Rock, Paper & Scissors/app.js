let userScore = 0;
let cpuScore = 0;

const choices = document.querySelectorAll(".sign");
const msg = document.querySelector("#msg");
const userScoreCount = document.querySelector("#user-score");
const cpuScoreCount = document.querySelector("#cpu-score");


const genCpuChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex =  Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const showWinner = (userWin, userChoice, cpuChoice) => {
    if(userWin)
    {
        userScore++;
        userScoreCount.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${cpuChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        cpuScore++;
        cpuScoreCount.innerText = cpuScore;
        msg.innerText = `You Lost. ${cpuChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#1B2631";
};

const playGame = (userChoice) => {
    const cpuChoice = genCpuChoice();
    console.log("cpu choice = ", cpuChoice);
        
    if(userChoice === cpuChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = cpuChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper")
        {
            userWin = cpuChoice === "scissors" ? false:true;
        }
        else
        {
            userWin = cpuChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, cpuChoice);
    }
};


choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
} );