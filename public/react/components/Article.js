import React, { useState } from 'react';
import { EditForm } from './EditForm';
import apiURL from '../api';
import { ItemsList } from './ItemsList';

// Article component
export function Article(props) {
  const { item } = props;
  const [form, setForm] = useState(false);

  async function handleItemSubmit(itemData) {
    try {
      const itemResponse = await fetch(`${apiURL}/items/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });
      const updatedItem = await itemResponse.json();
      setForm(false);
    } catch (error) {
      console.log("Error updating item: ", error);
    }
  }

  async function handleItemDelete() {
    try {
      await fetch(`${apiURL}/items/${item.id}`, {
      method: 'DELETE',
        body: item.id,
      }).then(setArticle());  

    } catch (error) {
      console.log("Error deleting item: ", error);
    }
  }

  function setArticle() {
    window.location.reload();
  }

  return (
    <div className="article">
      <h3>Name: {item.title}</h3>
      <h4>Description: {item.description}</h4>
      <h4>Price: {item.price}</h4>
      <h4>
        Image: <img src={item.image}></img>
      </h4>
      <h4>Category: {item.category}</h4>
      {!form && (
        <button onClick={() => setForm(true)}>Update</button>
      )}
      {form && (
        <EditForm
          item={item}
          onSubmit={handleItemSubmit}
          onCancel={() => setForm(false)}
        />
      )}
      <button onClick={handleItemDelete}>Delete</button>
      <button onClick={setArticle}>Back</button>
    </div>
  );
}
