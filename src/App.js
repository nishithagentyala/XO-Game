import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterGame from "./Components/EnterGame";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<EnterGame setCurrentPlayer={setCurrentPlayer} />}
          />
          <Route
            path="/playGame"
            element={
              <GameBoard
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
