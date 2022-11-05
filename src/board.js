export default function createBoard() {
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
};

