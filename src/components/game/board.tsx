import React, { useEffect, useState } from "react";
import { Square } from "./Square";
import logo from "../../assets/logo.svg";
import X from "../../assets/icon-x.png";
import outline from "../../assets/Group 1.png";
import ovalOutline from "../../assets/oval-outline.png";
import O from "../../assets/icon-o.png";
import restart from "../../assets/icon-restart.svg";
import "./board.scss";
import calculateWinner from "../helper/calculateWinner";
import { Popup } from "./popup/Popup";
import { Restart } from "./restartPop/Restart";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [reset, setReset] = useState<boolean>(false);

  var winner: string = calculateWinner(squares);
  //>>>> CPU LOGIC
  useEffect(() => {
    var emptySlots: any = [];
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        emptySlots.push(i);
      }
    }
    const cpu = () => {
      const randomSlot = Math.floor(Math.random() * emptySlots.length);
      if (player === "X" && !isX) {
        squares[emptySlots[randomSlot]] = "O";
        setSquares(squares);
        setIsX(!isX);
      }
      if (player === "O" && isX && !winner) {
        squares[emptySlots[randomSlot]] = "X";
        setSquares(squares);
        setIsX(!isX);
      }
    };
    setLoading(false);
    if (!multiPlayer && !loading) {
      if (!loading) {
        cpu();
      }
    }
    if (winner === "X") {
      setXScore(xScore + 1);
    } else if (winner === "O") {
      setOScore(oScore + 1);
    }
  }, [winner, squares, multiPlayer, player, isX, loading]);
  // >>>>

  const handleClick = (e: number) => {
    if (winner || squares[e]) {
      return;
    }

    if (multiPlayer) {
      squares[e] = isX ? "X" : "O";
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
      {/*>>>>  popup after winning  */}
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
      {/* >>>> */}

      {/*>>> popup after clicking on restart button */}
      {reset ? (
        <Restart
          handleRestart={() => {
            setSquares(Array(9).fill(null));
            setIsX(true);
            setReset(false);
          }}
          handleCancel={() => setReset(false)}
        />
      ) : null}
      {/* >>> */}

      {/* drawing board */}
      <div className="board">
        <div className="board-top">
          <img style={{ height: "32px" }} src={logo} alt="logo" />
          <button>
            <img
              style={{ width: "20px", height: "20px" }}
              src={isX ? outline : ovalOutline}
              alt="xo"
            />{" "}
            Turn
          </button>
          <button
            onClick={() => {
              setReset(true);
            }}
          >
            <img src={restart} alt="restart" />
          </button>
        </div>
        <div className="board-row">
          <Square isX={isX} value={squares[0]} onClick={() => handleClick(0)} />
          <Square isX={isX} value={squares[1]} onClick={() => handleClick(1)} />
          <Square isX={isX} value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square isX={isX} value={squares[3]} onClick={() => handleClick(3)} />
          <Square isX={isX} value={squares[4]} onClick={() => handleClick(4)} />
          <Square isX={isX} value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square isX={isX} value={squares[6]} onClick={() => handleClick(6)} />
          <Square isX={isX} value={squares[7]} onClick={() => handleClick(7)} />
          <Square isX={isX} value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <div className="board-bottom">
          <div>
            X{player === "X" ? "(YOU)" : "(CPU)"} <br />
            {xScore}
          </div>
          <div>
            Ties <br />
            {tieScore}
          </div>
          <div>
            O{player === "O" ? "(YOU)" : "(CPU)"} <br />
            {oScore}
          </div>
        </div>
      </div>
    </>
  );
};
