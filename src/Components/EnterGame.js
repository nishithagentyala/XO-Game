import React from "react";
import { useNavigate } from "react-router-dom";

const EnterGame = ({ setCurrentPlayer }) => {
  const navigate = useNavigate();
  const handlePlayer = (player) => {
    setCurrentPlayer(player);
    navigate("/playGame");
  };
  return (
    <div>
      <div>
        <h1> Tic Tac Toe</h1>
        <h2>Select which player you want to be..?</h2>
        <button
          onClick={() => {
            handlePlayer("X");
          }}
        >
          Player X
        </button>
        <button
          onClick={() => {
            handlePlayer("O");
          }}
        >
          Player O
        </button>
      </div>
    </div>
  );
};

export default EnterGame;
