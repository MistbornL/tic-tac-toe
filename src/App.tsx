import React, { useState } from "react";
import "./App.scss";
import logo from "./assets/logo.svg";
import Xicon from "./assets/Group 1.png";
import Oicon from "./assets/Path.png";
import { Board } from "./components/game/board";

function App() {
  const [game, setGame] = useState(false);
  const [multiPlayer, setMultiPlayer] = useState(false);
  const [player, setPlayer] = useState("");
  return (
    <div className="App">
      {!game ? (
        <div className="game-menu">
          <img src={logo} alt="logo" />

          <div className="game-menu-mid">
            <h3>PICK PLAYER 1'S MARK</h3>
            <div className="choice">
              <button className="active" onClick={() => setPlayer("X")}>
                <div>
                  <img src={Xicon} alt="X" />
                </div>
              </button>
              <button
                onClick={() => setPlayer("O")}
                style={{ background: "#A8BFC9" }}
              >
                <img src={Oicon} alt="O" />
              </button>
            </div>
            <h3>
              <span>REMEMBER : X GOES FIRST</span>
            </h3>
          </div>
          <div className="game-menu-bottom">
            <button
              onClick={() => {
                setGame(true);
                setMultiPlayer(false);
              }}
            >
              NEW GAME(VS CPU)
            </button>
            <button
              onClick={() => {
                setGame(true);
                setMultiPlayer(true);
              }}
            >
              NEW GAME(VS PLAYER)
            </button>
          </div>
        </div>
      ) : (
        <Board player={player} setGame={setGame} multiPlayer={multiPlayer} />
      )}
    </div>
  );
}

export default App;
