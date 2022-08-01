import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <div className="game-menu">
        <img src={logo} alt="logo" />

        <div className="game-menu-mid">
          <h3>PICK PLAYER 1'S MARK</h3>
          <div className="choice">
            <button></button>
            <button></button>
          </div>
          <h3>REMEMBER : X GOES FIRST</h3>
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
