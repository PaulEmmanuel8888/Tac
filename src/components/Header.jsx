const Header = ({ winner, restartGame, currentPlayer }) => {
  return (
    <div className="header">
      {winner ? (
        <h1>Winner: {winner}</h1>
      ) : (
        <h1>{currentPlayer + "'s Turn"}</h1>
      )}

      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
};

export default Header;
