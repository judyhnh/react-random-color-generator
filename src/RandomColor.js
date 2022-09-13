import './App.css';
import { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#63b08b');
  const getColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h1>Generated Color: {color}</h1>
      <button onClick={getColor}>Generate</button>
    </div>
  );
};

export default RandomColor;
