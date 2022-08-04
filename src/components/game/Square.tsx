import X from "../../assets/icon-x.png";
import O from "../../assets/icon-o.png";

interface props {
  isX: boolean;
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Square = ({ isX, value, onClick }: props) => {
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
