import React, { useState } from "react";
import "./App.scss";
import logo from "./assets/logo.svg";
import { ReactComponent as Xicon } from "./assets/icon-x.svg";
import { ReactComponent as Oicon } from "./assets/icon-o.svg";
import { Board } from "./components/game/board";

function App() {
  const [game, setGame] = useState(false);
  const [multiPlayer, setMultiPlayer] = useState(false);
  return (
    <div className="App">
      {!game ? (
        <div className="game-menu">
          <img src={logo} alt="logo" />

          <div className="game-menu-mid">
            <h3>PICK PLAYER 1'S MARK</h3>
            <div className="choice">
              <button>
                <div>
                  <Xicon fill="#A8A8A8" />
                </div>
              </button>
              <button style={{ background: "#A8BFC9" }}>
                <Oicon />
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
        <Board game={game} multiPlayer={multiPlayer} />
      )}
    </div>
  );
}

export default App;
