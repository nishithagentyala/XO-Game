import React from "react";

const Game = ({ value, onClick }) => {
  return (
    <button className="box" onClick={onClick}>
      {value}
    </button>
  );
};

export default Game;
