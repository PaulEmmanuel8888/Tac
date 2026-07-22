import Square from "./Square";

const Board = ({ boardState, handleSquareClick, winningPattern }) => {
  return (
    <>
      <div className="board">
        {boardState.map((value, index) => (
          <Square
            key={index}
            value={value}
            index={index}
            handleClick={handleSquareClick}
            isWinningSquare={winningPattern?.includes(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
