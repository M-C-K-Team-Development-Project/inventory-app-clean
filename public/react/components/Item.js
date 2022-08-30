import React from "react";

export const Item = (props) => {
  const clickHandler = () => {
    if (props.setCurrent) {
      props.setCurrent(props.item);
    }
  };

  return (
    <>
      <h3>{props.item.title}</h3>
      <img
        src={props.item.image}
        alt={props.item.title}
        onClick={clickHandler}
      />
      <p>{props.item.description}</p>
      <p>£{props.item.price}</p>
      <p>{props.item.category}</p>
    </>
  );
};
