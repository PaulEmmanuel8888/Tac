const Square = ({ value, index, handleClick }) => {
  return (
    <div className="square" onClick={() => handleClick(index)}>
      {value === null ? "" : value}
    </div>
  );
};

export default Square;
