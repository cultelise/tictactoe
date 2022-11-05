const subButton = document.getElementById("submit");

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

subButton.addEventListener("click", () => {
  const playerInput1 = document.getElementById("player1");
  const playerName1 = playerInput1.value;
  const playerInput2 = document.getElementById("player2");
  const playerName2 = playerInput2.value;
  const player1 = player(playerName1);
  const player2 = player(playerName2);

  (function createBoard() {
    const grid = Array(9);
    const body = document.querySelector("body");
    const board = document.createElement("div");
    grid.fill(" ");

    board.id = "board";
    board.style.display = "grid";
    board.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)";
    board.style.width = "350px";
    board.style.height = "350px";
    board.style.justifyItems = "center";
    board.style.alignItems = "center";
    board.style.fontSize = "90px";
    board.style.border = "1px solid black";

    let e = 0;
    for (let square of grid) {
      let s = document.createElement("div");
      s.textContent = square;
      s.id = `${e + 1}`;
      s.className = "square";
      s.style.border = "1px solid black";
      board.appendChild(s);
      e++;
    }

    body.appendChild(board);
  })();

  const activePlayer = () => {
    if (swap === 0) {
      swap++;
      return player1;
    } else swap--;
    return player2;
  };

  const getPlayerChoice = () => (swap === 0 ? "X" : "O");

  const names = document.getElementById("names");
  const squares = document.querySelectorAll(".square");

  for (let square of squares) {
    square.addEventListener("click", () => {
      if (square.textContent === " ") {
        square.textContent = getPlayerChoice();
        names.textContent = `${activePlayer().getName()}! It's your turn!`;
      }
    });
  }
  names.textContent = `${activePlayer().getName()}! It's your turn!`;
});
