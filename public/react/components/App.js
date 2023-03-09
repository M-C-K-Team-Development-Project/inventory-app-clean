import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { Article } from './Article';
import { Add } from './Add';
import apiURL from '../api';

export const App = () => {
  const [article, setArticle] = useState();
  const [items, setItems] = useState([]);
	const [showForm, setShowForm] = useState(false);


  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log('Oh no an error! ', err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  async function handleItemSubmit(itemData) {
		try {
			// Fetch a random image from the Unsplash API
			const imageResponse = await fetch('https://api.unsplash.com/photos/random/?client_id=sOxW9LYygZyeU6uV74CCDW6-CwSQrV1EnBzHVG3b-6M');
			const imageData = await imageResponse.json();
	
			// Add the image URL to the item data
			const newItemData = {
				...itemData,
				image: imageData.urls.regular,
			};
	
			// Send the item data to the server
			const itemResponse = await fetch(`${apiURL}/items`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newItemData),
			});
	
			const newItem = await itemResponse.json();
			setItems([...items, newItem]);
			setShowForm(false);
		} catch (err) {
			console.log('Oh no an error! ', err);
		}
	}


  return (
    <main>
      <h1>DIG-IN</h1>
      <h2>DIG-IN TO ALL EXCLUSIVE THINGS 🔥</h2>
			{!showForm && (
        <button onClick={() => setShowForm(true)}>Add Item</button>
      )}

      {/* Show the form if the user has clicked the button */}
      {showForm && (
        <Add onSubmit={handleItemSubmit} onCancel={() => setShowForm(false)} />
      )}
      {!article ? (
        <ItemsList items={items} setArticle={setArticle} />
      ) : (
        <Article item={article} setArticle={setArticle} />
      )}
    </main>
  );
};