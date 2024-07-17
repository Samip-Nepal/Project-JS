let game2 = document.querySelectorAll(".game-2"); // Access play buttons
let game3 = document.querySelector("#reset"); // Access the reset button
let newwinner = document.querySelector(".new-msg");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#new-game");
let turn0 = true; // One player turn

const winrate = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

Array.from(game2).forEach((game, index) => {
    game.addEventListener("click", () => {
        if (turn0) {
            game.innerText = "O";
            game.style.fontWeight = "700";
            game.style.fontSize = "3em";
            game.style.color = "#FF7F50";
            turn0 = false;
        } else {
            game.innerText = "X";
            game.style.fontWeight = "700";
            game.style.fontSize = "3em";
            game.style.color = "#00A676";
            turn0 = true;
        }
        game.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winrate) {
        let pos1 = game2[pattern[0]].innerText;
        let pos2 = game2[pattern[1]].innerText;
        let pos3 = game2[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 == pos2 && pos2 == pos3) {
                winnerfun(pos1);
            }
        }
    }
};

const winnerfun = (winner) => {
    msg.innerText = `Here is the winner "${winner}"`;
    newwinner.classList.remove("hide");
    nousebox();
};

const nousebox = () => {
    for (let box of game2) {
        box.disabled = true;
    }
};

const yesusebox = () => {
    for (let box of game2) {
        box.disabled = false;
        box.innerText = "";
        box.style.fontWeight = "";
        box.style.fontSize = "";
        box.style.color = "";
    }
};

const resetgame = () => {
    turn0 = true;
    yesusebox();
    newwinner.classList.add("hide");
    msg.innerText = "";
};

game3.addEventListener("click", resetgame); // Corrected to use game3 directly
newgame.addEventListener("click", resetgame);
