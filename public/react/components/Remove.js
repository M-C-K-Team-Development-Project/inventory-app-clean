import apiURL from "../api";
import { App } from "./App";

export function handleRemove(props) {
  fetch(`/${apiURL}/items/`, {
    method: "DELETE",
    body: props.item.id,
  })
    .then((res) => res.json())
    .then(() => console.log(res))
    /* .then(
      fetch(`${apiURL}/items`, {
        method: "GET",
      })
    )*/
    .catch((err) => console.log(err));

  //items: this.state.items.filter(item => {
  //  return item._id !== e._id // change this to match your code if necessary
  // })}
}
