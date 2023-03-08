import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { Article }	from './Article'; 

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	const [article, setArticle] = useState();
	const [items, setItems] = useState([]);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
			
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
            <h1>Item Store</h1>
			<h2>All things 🔥</h2>
			{!article ? (
        <ItemsList items={items} setArticle={setArticle} />
      ) : (
        <Article item={article} setArticle={setArticle} />
      )}
		</main>
	)
}