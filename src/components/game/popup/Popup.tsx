import "./popup.scss";

interface properties {
  message: string;
  img: any;
  winner: string;
  // quitHandle: React.MouseEventHandler<HTMLButtonElement>;
  nextHandle: React.MouseEventHandler<HTMLButtonElement>;
}
export const Popup = ({
  message,
  img,
  winner,
  // quitHandle,
  nextHandle,
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
        <button>QUIT</button>
        <button onClick={nextHandle}>NEXT ROUND</button>
      </div>
    </div>
  );
};
