let counter = 0,
  swap = 0;

const player = (name) => {
  const getNumber = () => counter;
  const getName = () => name;
  const getChoice = () => {
    if (counter === 0) {
      counter++;
      return "X";
    } else return "O";
  };
  return { getName, getChoice, getNumber };
};

const playerInput1 = document.getElementById("player1");
const playerName1 = playerInput1.value;
const playerInput2 = document.getElementById("player2");
const playerName2 = playerInput2.value;

export const player1 = player(playerName1);
export const player2 = player(playerName2);


console.log(player1.getChoice())