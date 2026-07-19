import ResetBtn from "./ResetBtn.jsx";

const Header = ({ winner, restartGame, currentPlayer }) => {
  return (
    <div className="header">
      {winner ? (
        winner === "Draw" ? (
          <h1>Draw!!!</h1>
        ) : (
          <h1 className="winner">{winner} Wins</h1>
        )
      ) : (
        <h1>{currentPlayer + "'s Turn"}</h1>
      )}

      <ResetBtn onClick={restartGame} />
    </div>
  );
};

export default Header;
