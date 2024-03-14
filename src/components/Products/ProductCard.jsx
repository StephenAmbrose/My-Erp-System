// ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onDelete }) => {
  const { name, category, price, stock, description, imageUrl, quote } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-category">Category: {category}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="product-stock">Stock: {stock}</p>
        <p className="product-description">{description}</p>
        <p className="product-quote">{quote}</p>
        <div className="product-actions">
          <button className="edit-button">Edit</button>
          <button className="delete-button" onClick={() => onDelete(product.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
