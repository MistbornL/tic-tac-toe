import React from "react";
import "./App.scss";
import logo from "./assets/logo.svg";
import { ReactComponent as Xicon } from "./assets/icon-x.svg";
import { ReactComponent as Oicon } from "./assets/icon-o.svg";

function App() {
  return (
    <div className="App">
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
          <button>NEW GAME(VS CPU)</button>
          <button>NEW GAME(VS PLAYER)</button>
        </div>
      </div>
    </div>
  );
}

export default App;
