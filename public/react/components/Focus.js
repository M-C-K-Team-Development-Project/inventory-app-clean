import React from "react";
import { Item } from "./Item";

export const Focus = ({ current, setCurrent }) => {
  const clickHandler = () => {
    setCurrent();
  };

  return (
    <>
      {current.price ? <Item item={current} /> : <Item sauce={current} />}
      <button onClick={clickHandler}>Go Back</button>
    </>
  );
};
