import React from "react";
import apiURL from "../api";

export function Item(props) {
  async function fetchReq() {
    try {
      const res = await fetch(apiURL + "/items/" + props.item.id);
      const data = await res.json();
      console.log(data);
      props.setArticle(data);
    } catch (error) {
      console.log(error);
    }
  }

return <>
    <h3 onClick={fetchReq}>{props.item.title}</h3>
    <img src={props.item.image} alt={props.item.title} onClick={fetchReq} />
  </>
} 