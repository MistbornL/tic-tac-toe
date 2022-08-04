import { useState } from "react";
import "./popup.scss";

interface properties {
  message: string;
  img: any;
  winner: string;
  nextHandle: React.MouseEventHandler<HTMLButtonElement>;
  game: boolean;
}
export const Popup = ({
  message,
  img,
  winner,
  nextHandle,
  game,
}: properties) => {
  return (
    <div className="popup">
      <h2>{message}</h2>
      <div className="winner">
        {winner ? (
          <h1
            style={winner === "X" ? { color: "#31C3BD" } : { color: "#F2B137" }}
          >
            {/* <img src={img} alt="winner" /> */}
            {winner} TAKES THE ROUND
          </h1>
        ) : null}
      </div>
      <div className="popup-bottom">
        <button
          onClick={() => {
            game = false;
            console.log(game);
          }}
        >
          QUIT
        </button>
        <button onClick={nextHandle}>NEXT ROUND</button>
      </div>
    </div>
  );
};
