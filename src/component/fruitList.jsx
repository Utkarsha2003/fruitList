import React, { useState } from 'react'; // Import statements at the top
import appleImage from '../apple.jpeg';
import bananaImage from '../banana.webp';
import mangoImage from '../mango.jpeg';
import cherryImage from '../cherry.jpg';
import guavaImage from '../guava.jpeg';
import litchiImage from '../litchi.jpg';

// Define fruit images and descriptions at the top level
const fruitImages = {
  Mango: mangoImage,
  Banana: bananaImage,
  Apple: appleImage,
  Cherry: cherryImage,
  Guava: guavaImage,
  Litchi: litchiImage,
};

const fruitDescriptions = {
  Mango: 'Rich in Vitamin C, Vitamin A, Vitamin E, Vitamin K, and Folate (Vitamin B9).',
Banana: 'Rich in Vitamin C, Vitamin B6, Folate (Vitamin B9), Vitamin A, and Riboflavin (Vitamin B2).',
Apple: 'Rich in Vitamin C, Vitamin K, Vitamin A, Folate (Vitamin B9), and Vitamin E.',
Cherry: 'Rich in Vitamin C, Vitamin A, Vitamin K, Folate (Vitamin B9), and Vitamin E.',
Guava: 'Rich in Vitamin C, Vitamin A, Vitamin E, Folate (Vitamin B9), and Vitamin K.',
Litchi: 'Rich in Vitamin C, Vitamin B6, Folate (Vitamin B9), Vitamin B3 (Niacin), and Vitamin E.',
};


const FruitList = ({ fruits }) => {
  const [fruitList, setFruitList] = useState(fruits); // Define fruitList state
  const [expandedFruit, setExpandedFruit] = useState(null); // State to track which fruit is expanded

  // Shuffle function
  const shuffleFruits = () => {
    const shuffled = [...fruitList].sort(() => Math.random() - 0.5); // Shuffle fruits
    setFruitList(shuffled); // Set the shuffled fruits to the state
  };

  // Function to handle the click and toggle expansion
  const handleExpand = (fruit) => {
    setExpandedFruit(expandedFruit === fruit ? null : fruit); // Toggle the clicked fruit
  };

  return (
    <div className="container">
      <h1 className="fruits-list-header">Fruits List</h1>
      <div className="fruit-grid">
        {fruitList.map((fruit, index) => (
          <div
            key={index}
            className={`fruit-item ${expandedFruit === fruit ? 'expanded' : ''}`}  // Add 'expanded' class if clicked
            onClick={() => handleExpand(fruit)}  // Set the clicked fruit
          >
            <img src={fruitImages[fruit]} alt={fruit} className="fruit-image" />
            <span>{fruit}</span>
            {expandedFruit === fruit && (
              <div className="fruit-description">{fruitDescriptions[fruit]}</div>
            )} {/* Show description if the fruit is expanded */}
          </div>
        ))}
      </div>
      {/* Centered Shuffle Button */}
      <div className="button-container">
        <button onClick={shuffleFruits} className="shuffle-btn">Shuffle Fruits</button>
      </div>
    </div>
  );
};

export default FruitList;
