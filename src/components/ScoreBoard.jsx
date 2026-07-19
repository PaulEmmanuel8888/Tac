const ScoreBoard = ({ scores, resetBoard }) => {
  const sortedByScore = Object.fromEntries(
    Object.entries(scores).sort(([, valA], [, valB]) => valB - valA),
  );
  console.log(sortedByScore);

  return (
    <div className="scoreboard">
      <div className="scoreboard-main">
        <div className="scoreboard-heading">Scores</div>

        {Object.keys(sortedByScore).map((key) => (
          <div key={key} className="scoreboard-item">
            <span className="scoreboard-symbol">{key}:</span>{" "}
            {sortedByScore[key]}
          </div>
        ))}

        <button onClick={resetBoard} className="reset-scores-btn">
          Reset Scoreboard
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;
