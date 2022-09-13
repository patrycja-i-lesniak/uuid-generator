import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import { TopGenerator, Footer, Card, UuidList } from "./components";

function App() {
  const [uuid, setUuid] = useState(uuidv4());
  const [items, setItems] = useState(0);
  const [itemOnList, setItemOnList] = useState("");

  function handleUuid(e) {
    e.preventDefault();
    setUuid(uuidv4());
  }

  function handleItems(e) {
    setItems(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setItemOnList(list);
    e.target.reset();
  }

  function GenerateList() {
    let itemList = [];
    for (let i = 1; i <= items; i++) {
      itemList.push(uuidv4());
    }
    return itemList;
  }

  const list = GenerateList().map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div className="App">
      <TopGenerator uuid={uuid} handleUuid={handleUuid} />
      <Card
        uuid={uuid}
        handleUuid={handleUuid}
        handleSubmit={handleSubmit}
        handleItems={handleItems}
      />
      <UuidList itemOnList={itemOnList} />
      <Footer />
    </div>
  );
}

export default App;