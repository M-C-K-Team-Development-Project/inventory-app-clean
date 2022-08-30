import React from "react";

export const Sauce = (props) => {
  const clickHandler = () => {
    if (props.setCurrent) {
      props.setCurrent(props.sauce);
    }
  };

  return (
    <>
      <h3>{props.sauce.name}</h3>
      <img
        src={props.sauce.image}
        alt={props.sauce.name}
        onClick={clickHandler}
      />
    </>
  );
};
