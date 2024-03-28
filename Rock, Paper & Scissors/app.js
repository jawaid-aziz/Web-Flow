let userScore = 0;
let cpuScore = 0;

const choices = document.querySelectorAll(".sign");

const genCpuChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex =  Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const showWinner = (userWin) => {
    if(userWin)
    {
        console.log("You Win!");
    }
    else
    {
        console.log("You Lose!");
    }
};

const drawGame = () => {
    console.log("game was draw");
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
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
        showWinner(userWin);
    }
};


choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
} );