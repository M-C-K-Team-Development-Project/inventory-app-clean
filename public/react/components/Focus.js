import React from "react";
import { Sauce } from "./Sauce";
import { Item } from "./Item";

export const Focus = ({ current, setCurrent }) => {
  const clickHandler = () => {
    setCurrent();
  };

  return (
    <>
      {current.price ? <Item item={current} /> : <Sauce sauce={current} />}
      <button onClick={clickHandler}>Go Back</button>
    </>
  );
};
