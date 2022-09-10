import React, { useState } from "react";
import "../App.css";
import { AiOutlineCopy } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function UuidGenerator({ copyText }) {
  const [uuid, setUuid] = useState(uuidv4());
  const [items, setItems] = useState(0);
  const [itemOnList, setItemOnList] = useState("");

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
    <>
{/* TOP CONTAINER */}
      <div className="top-container">
        <h1>Online UUID Generator</h1>
        <p>Your Version 4 UUID:</p>
        <div className="top-container-uuid">
          <h2>{uuid}</h2>
          <CopyToClipboard text={uuid} onCopy={() => [alert("Copied uuid", { uuid })]}>
            <button style={{ width: "100px" }}>
              <AiOutlineCopy />
              Copy{" "}
            </button>
          </CopyToClipboard>
        </div>

        <p className="top-container">
          <a href="/#" onClick={(e) => setUuid(uuidv4())}>
            Click{" "}
          </a>{" "}
          to generate another UUID.
        </p>
      </div>
{/* CARD*/}
      <div className="card">
        <h1 className="card-header"> Version 4UUID Generator</h1>
        <div className="card-body">
          <div className="card-button">
            <button className="button" onClick={(e) => setUuid(uuidv4())}>
              Generate a version 4 UUID
            </button>
          </div>
          <h2>Bulk Version 4 UUID Generation</h2>
          <div className="form-box">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-inline">
                <label className="form-label">How Many?</label>
                <div className="input-group">
                  <input
                    type="number"
                    onChange={(e) => setItems(e.target.value)}
                    placeholder="Enter number"
                  />
                  <div className="input-group">
                    <button type="submit">Generate</button>
                  </div>
                </div>
                {/* {itemOnList && (
                  <a href="uuidList.txt" download>
                    Download to a file
                  </a>
                )} */}
              </div>
            </form>
            <div className="whatis">
              <h2>What is a version 4 UUID?</h2>
              <p>
                A Version 4 UUID is a universally unique identifier that is generated using random
                numbers. The Version 4 UUIDs produced by this site were generated using a secure
                random number generator.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      {itemOnList && (
        <div className="uuid-container">
          <h2>UUID identifiers</h2>
          <ul>{itemOnList}</ul>
        </div>
      )}
    </>
  );
}
