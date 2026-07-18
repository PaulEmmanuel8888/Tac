import Square from "./Square";

const Board = ({ boardState, handleSquareClick }) => {
  return (
    <>
      <div className="board">
        {boardState.map((value, index) => (
          <Square
            key={index}
            value={value}
            index={index}
            handleClick={handleSquareClick}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
