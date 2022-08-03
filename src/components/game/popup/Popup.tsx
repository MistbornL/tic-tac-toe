import "./popup.scss";

interface properties {
  message: string;
  img: any;
  winner: string;
}
export const Popup = ({ message, img, winner }: properties) => {
  return (
    <div className="popup">
      <h2>{message}</h2>
      <div className="winner">
        <h1
          style={winner === "X" ? { color: "#31C3BD" } : { color: "#F2B137" }}
        >
          {/* <img src={img} alt="winner" /> */}
          {winner} TAKES THE ROUND
        </h1>
      </div>
      <div className="popup-bottom">
        <button>QUIT</button>
        <button>NEXT ROUND</button>
      </div>
    </div>
  );
};
