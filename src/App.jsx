import { useState } from "react";
import Board from "./components/Board.jsx";

import Header from "./components/Header.jsx";
import { checkWinner, isBoardFull } from "./utils/gameLogic.js";

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
    if (winner !== null) return;

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
      if (isBoardFull(newBoard)) {
        setWinner("Draw");
      } else {
        setCurrentPlayer((prevPlayer) => {
          return prevPlayer === "X" ? "O" : "X";
        });
      }
    }
  }

  return (
    <div className="App">
      <Header winner={winner} />
      <Board boardState={boardState} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
