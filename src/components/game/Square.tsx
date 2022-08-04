import X from "../../assets/icon-x.png";
import O from "../../assets/icon-o.png";
export const Square = ({ value, onClick }: any) => {
  return (
    <button onClick={onClick}>
      {value === "X" ? (
        <img src={X} alt="x" />
      ) : value === "O" ? (
        <img src={O} alt="o" />
      ) : null}
    </button>
  );
};
