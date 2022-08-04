import X from "../../assets/icon-x.png";
import O from "../../assets/icon-o.png";
export const Square = ({ isX, value, onClick }: any) => {
  return (
    <button className={isX ? "xturn" : "oturn"} onClick={onClick}>
      {value === "X" ? (
        <img src={X} alt="x" />
      ) : value === "O" ? (
        <img src={O} alt="o" />
      ) : null}
    </button>
  );
};
