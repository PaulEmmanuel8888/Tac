import Icon from "./Icon.jsx";

const Square = ({ value, index, handleClick, isWinningSquare }) => {
  return (
    <div
      className={`square ${isWinningSquare ? "winner" : ""}`}
      onClick={() => handleClick(index)}
    >
      {value === null ? "" : <Icon value={value} />}
    </div>
  );
};

export default Square;
