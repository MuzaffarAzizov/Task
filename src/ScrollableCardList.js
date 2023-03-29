import React, { useState } from "react";
import "./App.css";
import Data from "./Data";
import Card from "./Card";

function ScrollableCardList() {
  const [cards, setCards] = useState(Data);

  const handleDrag = (event, id) => {
    event.dataTransfer.setData("cardId", id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, id) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("cardId");
    const cardIndex = cards.findIndex((card) => card.id === Number(cardId));
    const card = cards[cardIndex];
    const newCards = [...cards];
    newCards.splice(cardIndex, 1);
    const index = newCards.findIndex((card) => card.id === id);
    newCards.splice(index + 1, 0, card);
    setCards(newCards);
  };

  const chunkedCards = chunk(cards, Math.ceil(cards.length / 3));

  return (
    <div className="scroll-container">
      {chunkedCards.map((chunk, index) => (
        <div key={index} className="column">
          {chunk.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleDrag={handleDrag}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

export default ScrollableCardList;
