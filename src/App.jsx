import { useState } from "react";
import Board from "./components/Board";

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

  function handleSquareClick(index) {
    if (boardState[index] !== null) {
      return;
    }

    setBoardState((prevBoardState) => {
      const newState = [...prevBoardState];
      newState[index] = currentPlayer;
      return newState;
    });
    setCurrentPlayer((prevPlayer) => {
      return prevPlayer === "X" ? "O" : "X";
    });
  }

  return (
    <div className="App">
      <Board boardState={boardState} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
