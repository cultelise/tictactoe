(function () {
  const GameBoard = (() => {
    const grid = Array(9);
    const getBoard = () => grid;

    const createBoard = (() => {
      const body = document.querySelector('body');
      const board = document.createElement('div');
      board.id = 'board';
      console.log(board)
      const square = document.createElement('div')
  
      
  
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
