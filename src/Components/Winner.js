import React from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "./Winner.css";

const Winner = ({ winner, isGameOver }) => {
  const navigate = useNavigate();
  function restart() {
    navigate("/");
  }
  return (
    <div className="winner">
      <Confetti
        width={window.width}
        height={window.height}
        numberOfPieces={200}
      />

      <div className="player">
        {winner && isGameOver ? (
          <h3>
            Player "<span className="name">{winner}</span>" Wins
          </h3>
        ) : (
          <span className="name"> Its a Tie </span>
        )}
        <button className="restart" onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Winner;
