import Icon from "./Icon.jsx";

const Square = ({ value, index, handleClick }) => {
  return (
    <div className="square" onClick={() => handleClick(index)}>
      {value === null ? "" : <Icon value={value} />}
    </div>
  );
};

export default Square;
