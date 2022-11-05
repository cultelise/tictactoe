import {player1, player2} from './init';

let counter = 0,
  swap = 0;
  
console.log(player1)


export const mode = () => {

  const getTurn = () => {
    if (swap === 0) {
      swap++
      return player1;
    } else { 
      swap--;
      return player2;
    };
  }

  const names = document.getElementById("names");
  const squares = document.querySelectorAll(".square");

  console.log(player1.getName())

  for (let square of squares) {
    square.addEventListener("click", () => {
      console.log(getTurn().getChoice())
      if (square.textContent === " ") {
        square.textContent = getTurn().getChoice();
        names.textContent = `${getTurn().getName()}! It's your turn!`;
      }
    }); names.textContent = `${getTurn().getName()}! It's your turn!`;
  };
}


