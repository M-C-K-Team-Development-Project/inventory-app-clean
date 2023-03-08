import React from 'react';

// Name, Description, Price, Category, Image
export function Article(props) {
  return (
    <>
      <h3>Name:{props.item.name}</h3>
      <h4>Des:{props.item.description}</h4>
      <h4>Price:{props.item.price}</h4>
      <h4>Image: <img src={props.item.image}></img></h4>
      <h4>Category:{props.item.category}</h4>
      <button onClick={() => props.setArticle()}>Update</button>
      <button onClick={() => props.setArticle()}>Delete</button>
      <button onClick={() => props.setArticle()}>Back</button>
    </>
  );
}