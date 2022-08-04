import "./popup.scss";

interface properties {
  message: string;
  img: any;
  winner: string;
  nextHandle: React.MouseEventHandler<HTMLButtonElement>;
  setGame: any;
}
export const Popup = ({
  message,
  img,
  winner,
  nextHandle,
  setGame,
}: properties) => {
  return (
    <div className="popup">
      <h2>{message}</h2>
      <div className="winner">
        {winner ? (
          <h1
            style={winner === "X" ? { color: "#31C3BD" } : { color: "#F2B137" }}
          >
            <img src={img} alt="winner" />
            TAKES THE ROUND
          </h1>
        ) : null}
      </div>
      <div className="popup-bottom">
        <button
          onClick={() => {
            setGame(false);
          }}
        >
          QUIT
        </button>
        <button onClick={nextHandle}>NEXT ROUND</button>
      </div>
    </div>
  );
};
