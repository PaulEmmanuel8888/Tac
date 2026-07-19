import Refresh from "../assets/images/Refresh.svg?react";
const ResetBtn = ({ onClick }) => {
  return (
    <div className="restart-btn" onClick={onClick}>
      <Refresh />
    </div>
  );
};

export default ResetBtn;
