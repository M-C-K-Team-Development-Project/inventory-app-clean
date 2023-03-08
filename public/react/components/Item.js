import React from "react";
import apiURL from '../api';

export const Item = (props) => {

async function fetchReq() {
    try {
      const res = await fetch(apiURL + "/items/" + props.item.id);
      const data = await res.json();
      console.log(data)
      props.setArticle(data);
    } catch (error) {
      console.log(error);
    }
  }

 /* const clickHandler = () => {
    if (props.setCurrent) {
      props.setCurrent(props.item);
    }
  };*/

  return (
    <>
      <div class="item"> 
      <h3>{props.item.title}</h3>
      <img
        src={props.item.image}
        alt={props.item.title}
          onClick={fetchReq}
          className="img"
      />
      <p>£{props.item.price}</p>
        <p>{props.item.category}</p>
        </div>
    </>
  );
};
