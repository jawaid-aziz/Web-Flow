let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn_O = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn_O = true;
    enableBoxes();
    removeWinningClass(); // Reset the winning class
};

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("winning-box"); // Remove winning class
    }
};

const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val)
        {
            // Highlight the winning boxes
            boxes[pattern[0]].classList.add("winning-box");
            boxes[pattern[1]].classList.add("winning-box");
            boxes[pattern[2]].classList.add("winning-box");

            disableBoxes();
        }
    }
};

boxes.forEach ( (box) => {
    box.addEventListener("click", () => {
        if(turn_O)
        {
            box.innerText = "O";
            turn_O = false;
        }
        else
        {
            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

resetBtn.addEventListener("click", resetGame);
