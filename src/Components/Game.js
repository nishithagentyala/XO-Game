import React from "react";
import "./GameBoard.css";
const Game = ({ value, onClick }) => {
  return (
    <button className="cell" onClick={onClick}>
      {value}
    </button>
  );
};

export default Game;
