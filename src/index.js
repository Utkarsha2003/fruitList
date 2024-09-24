import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FruitList from './component/fruitList'; // Import the correct FruitList component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root correctly
root.render(
  <React.StrictMode>
    <FruitList fruits={["Mango", "Banana", "Apple","Cherry","Guava","Litchi"]} /> {/* Pass the fruits prop here */}
  </React.StrictMode>
);