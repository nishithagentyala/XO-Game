import React from "react";
import { useNavigate } from "react-router-dom";
import "./EnterGame.css";

const EnterGame = ({ setCurrentPlayer }) => {
  const navigate = useNavigate();
  const handlePlayer = (player) => {
    setCurrentPlayer(player);
    navigate("/playGame");
  };
  return (
    <div className="enterGame">
      <h1> Tic Tac Toe</h1>
      <h3>Select which player you want to be..?</h3>
      <button
        className="btn"
        onClick={() => {
          handlePlayer("X");
        }}
      >
        Player X
      </button>
      <button
        className="btn"
        onClick={() => {
          handlePlayer("O");
        }}
      >
        Player O
      </button>
    </div>
  );
};

export default EnterGame;
