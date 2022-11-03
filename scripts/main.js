(function () {
  const GameBoard = (() => {
    const grid = Array(9);
    grid.fill(' ');
    const getBoard = () => grid;
    
    const addChoice = ((choice, square) => {
      grid[square].textContent = choice;
    })

    const createBoard = (() => {
      const body = document.querySelector('body');
      const board = document.createElement('div');
      board.id = 'board';
      board.style.display = 'grid';
      board.style.gridTemplate = '1fr 1fr 1fr / 1fr 1fr 1fr'
      board.style.width = '350px';
      board.style.height = '350px';
      board.style.justifyItems = 'center';
      board.style.alignItems = 'center';
      board.style.fontSize = '90px';
      board.style.border = '1px solid black';

      let e = 0;
      for (let square of grid) {
        let s = document.createElement('div');
        s.textContent = square;
        s.id = `${e + 1}`;
        s.className = 'square';
        s.style.border = "1px solid black";
        board.appendChild(s);
        e++;
      }

        body.appendChild(board)
  
    })()
    
    return { getBoard, createBoard, addChoice};
  })();

  let counter = 0,
      swap = 0;
  const player = (name, color) => {
    const getName = () => name;
    const getColor = () => color;
    const getChoice = () => counter === 0 ? 'X': 'O';
    counter++;
    return { getName, getColor, getChoice };
  };

  const bill = player("bill", "white");

  const getPlayerChoice = () => swap === 0 ? 'X': 'O';
  

  const squares = document.querySelectorAll('.square');
  for (let square of squares) {
    square.addEventListener('click', (e) => {
      const choice = e.target.id;
      console.log(getPlayerChoice)
      square.textContent = getPlayerChoice();
      swap === 0 ? swap++: swap--;
    })
  }
  
})();
