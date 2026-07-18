import { useState } from "react";
import Board from "./components/Board";

import { checkWinner } from "./utils/gameLogic.js";

function App() {
  const [boardState, setBoardState] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  function handleSquareClick(index) {
    if (boardState[index] !== null) {
      return;
    }

    const newBoard = [...boardState];
    newBoard[index] = currentPlayer;

    const result = checkWinner(newBoard);
    setBoardState(newBoard);

    if (result) {
      setWinner(result);
    } else {
      setCurrentPlayer((prevPlayer) => {
        return prevPlayer === "X" ? "O" : "X";
      });
    }
  }

  return (
    <div className="App">
      <Board boardState={boardState} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
