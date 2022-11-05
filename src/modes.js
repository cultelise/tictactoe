import {player1, player2} from './index';

let swap = 0,
turn;

export const mode = () => {
  turn;

  const swapTurn = () => {
    if (swap === 0) {
      swap++;
      turn = player1;
    } else { 
      swap--;
      turn = player2;
    };
  }


  const names = document.getElementById("names");
  const squares = document.querySelectorAll(".square");



  swapTurn();
  for (let square of squares) {
    square.addEventListener("click", () => {
      if (square.textContent === " ") {
        console.log(turn.name)
        square.textContent = turn.choice;
        names.textContent = `${turn.name}! It's your turn!`;
        console.log(turn)
        swapTurn();
      } 
    }); names.textContent = `${turn.name}! It's your turn!`;
  }; 
}


