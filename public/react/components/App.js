import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { ItemsList } from "./ItemsList";
import { Focus } from "./Focus";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState();

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();

      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchSauces();
    fetchItems();
  }, []);

  return (
    <main>
      {!current ? (
        <>
          <h1>Sauce Store</h1>
          <h2>All things 🔥</h2>
          <SaucesList sauces={sauces} setCurrent={setCurrent} />
          <h1>Item Store</h1>
          <h2>All things</h2>
          <ItemsList items={items} setCurrent={setCurrent} />
        </>
      ) : (
        <Focus current={current} setCurrent={setCurrent} />
      )}
    </main>
  );
};
