import React, { useState } from 'react';
import mangoImage from './mango.jpeg'; // Adjust the path based on where the image is
import bananaImage from './banana.webp"';
import appleImage from './apple.jpeg';

const fruitImages = {
  Mango: mangoImage,
  Banana: bananaImage,
  Apple: appleImage,
};

const FruitList = ({ fruits }) => {
  const [fruitList, setFruitList] = useState(fruits);

  const shuffleFruits = () => {
    const shuffled = [...fruitList].sort(() => Math.random() - 0.5);
    setFruitList(shuffled);
  };

  return (
    <div className="container">
      <h1>Fruits List</h1>
      <ul>
        {fruitList.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={shuffleFruits} className="shuffle-btn">Shuffle Fruits</button>
    </div>
  );
};

export default FruitList;
