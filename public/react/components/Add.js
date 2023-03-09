import React, { useState } from 'react';

const DEFAULT_IMAGE = 'https://picsum.photos/200';

export const Add = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(DEFAULT_IMAGE);
  const [category, setCategory] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      title,
      description,
      price,
      image,
      category
    });

    // Reset the form fields
    setTitle('');
    setDescription('');
    setPrice(0);
    setCategory('');
    setImage(DEFAULT_IMAGE);
  }

  function handleRandomImage() {
    const randomId = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/id/${randomId}/200`;
    setImage(imageUrl);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <br />
      <label>
        Image URL:
        <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
      </label>
      <button type="button" onClick={handleRandomImage}>Random Image</button>
      <br />
      <button type="submit">Create Item</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};