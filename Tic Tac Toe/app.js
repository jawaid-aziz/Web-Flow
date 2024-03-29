let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn_O = true;

const winPattterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [5, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn_O = true;
    enableBoxes();
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

        chkWinner = () => {
            for(let pattern of winPattterns)
            {
                let pos1Val = boxes[pattern[0]].innerText;
                let pos2Val = boxes[pattern[1]].innerText;
                let pos3Val = boxes[pattern[2]].innerText;
            }
            if(pos1Val != "" && pos2Val != "" && pos3Val != "")
            {
                if(pos1Val === pos2Val && pos2Val === pos3Val)
                {
                    disableBoxes();
                }
            }
        }
    });
});

resetBtn.addEventListener("click", resetGame);