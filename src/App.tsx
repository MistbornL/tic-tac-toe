import React from "react";
import "./App.scss";
import logo from "./assets/logo.svg";
import x from "./assets/icon-x.svg";
import o from "./assets/icon-o.svg";

function App() {
  return (
    <div className="App">
      <div className="game-menu">
        <img src={logo} alt="logo" />

        <div className="game-menu-mid">
          <h3>PICK PLAYER 1'S MARK</h3>
          <div className="choice">
            <button>
              <img src={x} alt="x" />
            </button>
            <button>
              <img src={o} alt="o" />
            </button>
          </div>
          <h3>
            <span>REMEMBER : X GOES FIRST</span>
          </h3>
        </div>
        <div className="game-menu-bottom">
          <button>NEW GAME(VS CPU)</button>
          <button>NEW GAME(VS PLAYER)</button>
        </div>
      </div>
    </div>
  );
}

export default App;
