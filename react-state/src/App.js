import "./App.css";
import Flowers from "./Flowers";
import React, { useState } from "react";

function getRandomFlowers() {
  const imageArray = ["Flowers1", "Flowers2", "Flowers3", "Flowers4"];
  return imageArray[Math.floor(Math.random() * imageArray.length)];
}

function App() {
  const [flowers, setflowers] = useState([]);
  const imageClick = () => {
    setflowers([...flowers, getRandomFlowers()]);
  };

  const flowersList = flowers.map((flowers, index) => {
    return <Flowers key={index} flowersName={flowers} />;
  });
  return (
    <div className="App">
      <button onClick={imageClick} className="appButton">
        Resim Ekle
      </button>
      <div className="flowersList">{flowersList}</div>
    </div>
  );
}

export default App;
