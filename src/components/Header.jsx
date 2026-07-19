const Header = ({ winner }) => {
  return (
    <div>
      <h1>Winner: {winner ? winner : "Unknown"}</h1>
    </div>
  );
};

export default Header;
