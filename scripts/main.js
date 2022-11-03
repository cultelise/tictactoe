(function () {
  const GameBoard = (() => {
    const grid = Array(9);
    grid.fill('X');
    const getBoard = () => grid;
    

    const createBoard = (() => {
      const body = document.querySelector('body');
      const board = document.createElement('div');
      board.id = 'board';
      board.style.display = 'grid';
      board.style.gridTemplate = '1fr 1fr 1fr / 1fr 1fr 1fr'
      board.style.width = '300px';


      const generateRows = (() => {
        let e = 0;
        for (i = 0; i < 3; i ++) {
          const row = document.createElement('div')
          row.id = `row${i + 1}`;
          if (e < 3) {
            while (e < 3) {
              const square = document.createElement('div')
              square.textContent = grid[e];
              row.appendChild(square);
              e++;
            }
          } else if (e > 2 && e < 6) {
                while (e < 6) {
                  const square = document.createElement('div')
                  square.textContent = grid[e];
                  row.appendChild(square);
                  e++;
                }
          } else if (e > 5) {
              while (e < 9) {
                const square = document.createElement('div')
                square.textContent = grid[e];
                row.appendChild(square);
                e++;
              }
          }
          console.log(e)
          board.appendChild(row);
        }})()

        body.appendChild(board)
  
    })()
    
    return { getBoard, createBoard };
  })();

  const player = (name, color) => {
    const getName = () => name;
    const getColor = () => color;
    return { getName, getColor };
  };

  const bill = player("bill", "white");

  const createBoard = (() => {
    const body = document.querySelector('body');
    const board = document.createElement('div');
    board.id = 'board';
    console.log(board)
    const square = document.createElement('div')



  })()


  console.log(GameBoard);
  console.log(bill);
})();
