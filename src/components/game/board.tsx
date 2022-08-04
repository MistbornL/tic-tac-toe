import React, { useEffect, useState } from "react";
import { Square } from "./Square";
import logo from "../../assets/logo.svg";
import X from "../../assets/icon-x.png";
import O from "../../assets/icon-o.png";
import "./board.scss";
import calculateWinner from "../helper/calculateWinner";
import { Popup } from "./popup/Popup";

interface props {
  multiPlayer: boolean;
  setGame: any;
  player: string;
}

export const Board = ({ multiPlayer, setGame, player }: props) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState<boolean>(true);
  const [xScore, setXScore] = useState<number>(0);
  const [oScore, setOScore] = useState<number>(0);
  const [tieScore, setTieScore] = useState<number>(0);
  var winner = calculateWinner(squares);

  //>>>> CPU LOGIC
  var emptySlots: any = [];
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      emptySlots.push(i);
    }
  }

  const cpu = () => {
    const randomSlot = Math.floor(Math.random() * emptySlots.length);
    if (player === "O" && isX) {
      squares[emptySlots[randomSlot]] = "X";
      setSquares(squares);
      setIsX(!isX);
    } else if (player === "X" && !isX) {
      squares[emptySlots[randomSlot]] = "O";
      setSquares(squares);
      setIsX(!isX);
    }
  };

  useEffect(() => {
    if (!multiPlayer && isX) {
      cpu();
    }
  }, [squares, emptySlots, isX]);
  // >>>>

  const handleClick = (e: number) => {
    if (winner || squares[e]) {
      return;
    }

    if (multiPlayer) {
      squares[e] = isX ? "X" : "O";
      console.log(multiPlayer);
    } else {
      if (player === "X") {
        squares[e] = isX ? "X" : null;
      } else {
        squares[e] = !isX ? "O" : null;
      }
    }

    setSquares(squares);
    setIsX(!isX);
  };

  const handleNext = () => {
    setSquares(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <>
      {winner ? (
        <Popup
          setGame={setGame}
          nextHandle={handleNext}
          message={player === winner ? "YOU WON!" : "OH NO, YOU LOST…"}
          img={winner === "X" ? X : O}
          winner={winner}
        />
      ) : !squares.includes(null) ? (
        <Popup
          setGame={setGame}
          nextHandle={handleNext}
          message={"ROUND TIED"}
          img=""
          winner={winner}
        ></Popup>
      ) : null}
      <div className="board">
        <div className="board-top">
          <img src={logo} alt="logo" />
          <button>Turn</button>
          <button>reset</button>
        </div>
        <div className="board-row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <div className="board-bottom">
          <div>
            X <br />
            {xScore}
          </div>
          <div>
            Ties <br />
            {tieScore}
          </div>
          <div>
            O <br />
            {oScore}
          </div>
        </div>
      </div>
    </>
  );
};
