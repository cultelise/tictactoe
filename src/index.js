import createBoard from './board';
import "./style.css";
import {mode} from './modes';

export let player1,
 player2,
 counter = 0;

const subButton = document.getElementById("submit");
subButton.addEventListener("click", () => {
  const player = (name) => {
    const getNumber = () => counter;
    const playerName = name;
    const getChoice = () => {
      if (counter === 0) {
        counter++;
        return "X";
      } else return "O";
    };
    const choice = getChoice();

    return { name: playerName, choice, getNumber };
  };
  
  const playerInput1 = document.getElementById("player1");
  const playerName1 = playerInput1.value;
  const playerInput2 = document.getElementById("player2");
  const playerName2 = playerInput2.value;
  
  player1 = player(playerName1);
  player2 = player(playerName2);
  
  createBoard();
  mode();
});
