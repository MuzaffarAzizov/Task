import React, { useState } from "react";
import "./App.css";
import Data from "./Data";
import img1 from "./assets/users.png";
import img2 from "./assets/file.png";
import img3 from "./assets/img1.png";
import img7 from "./assets/dot.png";

function ScrollableCardList() {
  const [cards, setCards] = useState(Data);

  const handleDrag = (event, index) => {
    event.dataTransfer.setData("cardId", index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("cardId");
    const cardIndex = cards.findIndex((card) => card.id === Number(cardId));
    const card = cards[cardIndex];
    const newCards = [...cards];
    newCards.splice(cardIndex, 1);
    newCards.splice(index, 0, card);
    setCards(newCards);
  };

  return (
    <div className="scroll-container">
      <h5>Новые 4</h5>
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="card"
          draggable="true"
          onDragStart={(event) => handleDrag(event, card.id)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, index)}
        >
          <div className="title">
            <h3 className="data__child">{card.title}</h3>
            <img src={img7} alt="" />
          </div>
          <p className="data__child">{card.content}</p>
          <div className="row">
            <div className="data__child pink">В приоритете</div>
            <div className="data__child number1">
              <img src={img1} alt="" /> 3
            </div>
            <div className="data__child number2">
              <img src={img2} alt="" />
              255
            </div>
          </div>
          <div className="data">
            <img src={img3} alt="" />
            <div className="data__child">
              <p className="data__child">Рекруитер</p>
              <h6 className="data__child">{card.name}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollableCardList;
