import X from "../../assets/Group 1.png";
import O from "../../assets/Path.png";
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
