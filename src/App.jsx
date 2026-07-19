import { useState } from "react";
import Board from "./components/Board.jsx";
import Header from "./components/Header.jsx";
import { checkWinner, isBoardFull } from "./utils/gameLogic.js";
import ScoreBoard from "./components/ScoreBoard.jsx";

function App() {
  const EMPTY_BOARD = Array(9).fill(null);
  const [boardState, setBoardState] = useState(EMPTY_BOARD);

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const [scores, setScores] = useState({
    X: 0,
    O: 0,
    Draws: 0,
  });

  function resetBoard() {
    setScores({
      X: 0,
      O: 0,
      Draws: 0,
    });
  }

  function updateScores(outcome) {
    setScores((prevScores) => {
      return {
        ...prevScores,
        [outcome]: prevScores[outcome] + 1,
      };
    });
  }

  function restartGame() {
    setBoardState([...EMPTY_BOARD]);
    setWinner(null);
    setCurrentPlayer("X");
  }

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
      updateScores(result);
    } else {
      if (isBoardFull(newBoard)) {
        setWinner("Draw");
        updateScores("Draws");
      } else {
        setCurrentPlayer((prevPlayer) => {
          return prevPlayer === "X" ? "O" : "X";
        });
      }
    }
  }

  return (
    <div className="App">
      <Header
        winner={winner}
        restartGame={restartGame}
        currentPlayer={currentPlayer}
      />
      <div className="main">
        <ScoreBoard scores={scores} resetBoard={resetBoard} />
        <Board boardState={boardState} handleSquareClick={handleSquareClick} />
      </div>
    </div>
  );
}

export default App;
