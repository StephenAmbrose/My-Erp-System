// ProductsManagement.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductsManagement.css'; // Import CSS file

const mockProducts = [
  { 
    id: 1, 
    name: 'Product 1', 
    category: 'Gadgets', 
    price: 50, 
    stock: 10, 
    description: 'The speed you not only need but you love , Reliability for life , Durability you want !.', 
    imageUrl: 'https://images.unsplash.com/photo-1589400066718-871249af5f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'This is a great product!'
  },
  { 
    id: 2, 
    name: 'Product 2', 
    category: 'Clothes', 
    price: 25, 
    stock: 15, 
    description: 'Showcase your personality with dressing !.', 
    imageUrl: 'https://img.freepik.com/free-photo/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.jpg',
    quote: 'I love this product!'
  },
  { 
    id: 3, 
    name: 'Product 3', 
    category: 'Home Products', 
    price: 30, 
    stock: 20, 
    description: 'Design your home with our products and make your neighbours jealous !.', 
    imageUrl: 'https://img.freepik.com/free-photo/zero-waste-beauty-products_23-2149304150.jpg?size=626&ext=jpg&ga=GA1.1.735984232.1710142793&semt=ais',
    quote: 'The best product ever!'
  },
  { 
    id: 4, 
    name: 'Product 4', 
    category: 'Health & Nutrition', 
    price: 15, 
    stock: 25, 
    description: 'Maintianing your body isnt easy , be stronger with our products', 
    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'A must-have product!'
  },
  { 
    id: 5, 
    name: 'Product 5', 
    category: 'Bath and Body', 
    price: 35, 
    stock: 12, 
    description: 'Love your body because you only have one !.', 
    imageUrl: 'https://st.depositphotos.com/1743476/1276/i/380/depositphotos_12767529-stock-photo-sauna.jpg',
    quote: 'You won\'t regret buying this product!'
  },
  { 
    id: 6, 
    name: 'Product 6', 
    category: 'Pet Supplies', 
    price: 22, 
    stock: 18, 
    description: 'Elegant Tails, Happy Hearts and look at their happiness !.', 
    imageUrl: 'https://media.istockphoto.com/id/1149531683/photo/dog-chooses-and-fetches-rope-toy-from-hoard-of-pet-toys-in-cart.jpg?s=612x612&w=0&k=20&c=pLKpSU7U8Bgnp9hmuM4DhRSX82a5aNLS1N9QyAKm2ts=',
    quote: 'An amazing product for everyone!'
  },
  { 
    id: 7, 
    name: 'Product 7', 
    category: 'Baby Loves', 
    price: 28, 
    stock: 8, 
    description: 'Having a baby is like falling in love again, both with your husband and your child !.', 
    imageUrl: 'https://images.unsplash.com/photo-1510154106653-3d0859b71c81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhYnklMjBsb3ZlfGVufDB8fDB8fHww',
    quote: 'Get ready to be amazed by this product!'
  },
  { 
    id: 8, 
    name: 'Product 8', 
    category: 'Beauty and Cosmetics', 
    price: 18, 
    stock: 30, 
    description: 'Experience the Essence of Glamorous Sophistication !.', 
    imageUrl: 'https://media.gettyimages.com/id/1249466095/photo/makeup-supplies-amidst-shiny-glitter.jpg?s=612x612&w=0&k=20&c=cAvn6efo00tSIAR03iz6YbJkwLiL3c2vUzYi4NM686M=',
    quote: 'The perfect product for any occasion!'
  },
  {
  id: 9, 
  name: 'Product 9', 
  category: 'Sports', 
  price: 18, 
  stock: 30, 
  description: 'Determined, Driven, and Ready for Victory', 
  imageUrl: 'https://media.istockphoto.com/id/1355687112/photo/various-sport-equipment-gear.webp?b=1&s=170667a&w=0&k=20&c=hEADFXL4HG9mF94yC5g3JA8lMHn8OZg7hRLoiel_L48=',
  quote: 'The most need of all time!!'
}
];


const ProductsManagement = () => {
  const [products, setProducts] = useState(mockProducts);

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <>
    <div>
      <h1 id='title'>Product Management</h1>
    </div>
        
    <div className="product-management-container">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={handleDeleteProduct}
        />
      ))}
      {/* Add option for adding a new product */}
      <div className="add-product">
        <button className="add-product-button">Add Product</button>
      </div>
    </div>
    </>
  );
};

export default ProductsManagement;
