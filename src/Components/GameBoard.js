import React from "react";
import Game from "./Game";
import { useState, useEffect } from "react";
import Winner from "./Winner";

const GameBoard = ({ currentPlayer, setCurrentPlayer }) => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const [isGameOver, setGameOver] = useState(false);
  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  function handleMove(index) {
    const clickSound = new Audio("/click-sound.mp3");
    clickSound.play();

    if (board[index] !== "" || isGameOver) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    //check winner afer move
    const winner = calculateWinner(newBoard);
    if (winner) {
      setWinner(winner);
      setGameOver(true);
      return;
    }
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }
  useEffect(() => {
    if (!board.includes("") && !winner) {
      setGameOver(true);
    }
  }, [board, winner]);

  return (
    <>
      <div className="game">
        {winner || isGameOver ? (
          <div className="backdrop"></div>
        ) : (
          <>
            <div>
              Player <span> {currentPlayer}'s turn</span>
            </div>
            <div className="board">
              {board.map((cell, index) => (
                <Game
                  key={index}
                  value={cell}
                  onClick={() => {
                    handleMove(index);
                  }}
                />
              ))}
            </div>{" "}
          </>
        )}
      </div>
      {winner || isGameOver ? (
        <Winner winner={winner} isGameOver={isGameOver} />
      ) : null}
    </>
  );
};

export default GameBoard;
