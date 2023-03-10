import React, { useState } from "react";

export function EditForm(props) {
  const [title, setTitle] = useState(props.item.title);
  const [description, setDescription] = useState(props.item.description);
  const [price, setPrice] = useState(props.item.price);
  const [category, setCategory] = useState(props.item.category);
  const [image, setImage] = useState(props.item.image);

  function handleSubmit(event) {
    event.preventDefault();
    const itemData = {
      title,
      description,
      price,
      category,
      image,
    };
    props.onSubmit(itemData);
  }

  return (
    <form onSubmit={handleSubmit} className="addForm">
      <label>
        Name:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Update</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
}
