import React from "react";
import ScrollableCardList from "./ScrollableCardList";

export const App = () => {
  return (
    <div className="app">
      <h1>Requests</h1>
      <h2>Заявки</h2>
      <div className="scroll">
        <ScrollableCardList />
        <ScrollableCardList />
        <ScrollableCardList />
      </div>
    </div>
  );
};
