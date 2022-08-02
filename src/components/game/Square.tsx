import React from "react";
import X from "../../assets/Group 1.png";
import O from "../../assets/Path.png";
export const Square = ({ value, onClick }: any) => {
  console.log(value);
  return (
    <button onClick={onClick}>
      <img src={value === "X" ? X : value === "O" ? O : null} alt="" />
    </button>
  );
};
