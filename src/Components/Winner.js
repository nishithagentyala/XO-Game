import React from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

const Winner = ({ winner, isGameOver }) => {
  return (
    <div className="winner">
      <Confetti
        width={window.width}
        height={window.height}
        numberOfPieces={200}
      />

      <div className="Player">
        {winner && isGameOver ? (
          <span>Player {winner} Wins</span>
        ) : (
          <span> Its a Tie </span>
        )}
      </div>
      <button className="restart">
        <Link to="/">Restart</Link>
      </button>
    </div>
  );
};

export default Winner;
