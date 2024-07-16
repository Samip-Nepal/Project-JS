let game2=document.querySelectorAll(".game-2");//acess play button
let game3=document.querySelectorAll("#reset");//acess to game-2
console.log(game2);
console.log(game3);
 let turn0 =true;//one player turn

 const winrate=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

 ];
 Array.from(game2).forEach((game) => {
    game.addEventListener("click", () => {
            if(turn0)
            {
game.innerText="O";
game.style.fontWeight="700";
game.style.fontSize="3em";
game.style.color="#FF7F50";


turn0=false;
            }
            else{
                game.innerText="X";
                game.style.fontWeight="700";
                game.style.fontSize="3em";
                game.style.color="#00A676";
                turn0=true;
            
            }
                game.disabled = true;
        });
     });
    

    
