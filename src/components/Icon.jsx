import O from "../assets/images/O.svg?react";
import X from "../assets/images/X.svg?react";

const Icon = ({ value }) => {
  return <div className="icon">{value === "X" ? <X /> : <O />}</div>;
};

export default Icon;
