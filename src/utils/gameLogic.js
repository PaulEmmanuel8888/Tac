export function checkWinner(board) {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const pattern of winningPatterns) {
    const values = pattern.map((index) => board[index]);
    if (values[0]) {
      const result = values.every((value) => value === values[0]);
      if (result) {
        return values[0];
      }
    }
  }

  return null;
}

export function isBoardFull(board) {
  return board.every((square) => square !== null);
}
