import React from "react";

export const Square = ({ value, onClick }: any) => {
  return <button onClick={onClick}>{value}</button>;
};
