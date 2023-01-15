const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(e) {
    e.target.innerHTML = currentPlayer;
    
    // Check for a win or draw after each move
    if (checkForWin()) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    } else if (checkForDraw()) {
      alert("It's a draw!");
      resetGame();
    } else {
      // Switch to the other player
      if (currentPlayer === 'X') {
        currentPlayer = 'O';
      } else {
        currentPlayer = 'X';
      }
    }
  });
}

function checkForWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (squares[winningCombinations[i][0]].innerHTML === currentPlayer &&
        squares[winningCombinations[i][1]].innerHTML === currentPlayer &&
        squares[winningCombinations[i][2]].innerHTML === currentPlayer) {
      return true;
    }
  }
  return false;
}

function checkForDraw() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML === '') {
      return false;
    }
  }
  return true;
}

function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }
  currentPlayer = 'X';
}
