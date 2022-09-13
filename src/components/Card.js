import React from "react";

export default function Card({ uuid, handleUuid, handleSubmit, handleItems }) {
  return (
    <div className="card">
      <h2 className="card-header"> Version 4UUID Generator</h2>
      <div className="card-body">
        <div className="card-button-container">
          <button
            className="button"
            onClick={(e) => {
              handleUuid(e);
            }}
          >
            Generate a version 4 UUID
          </button>
        </div>

        <h3>Bulk Version 4 UUID Generation</h3>

        <div className="form-box">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-inline">
              <label className="form-label">How Many?</label>
              <div className="input-group">
                <input
                  type="number"
                  onChange={(e) => {
                    handleItems(e);
                  }}
                  placeholder="Enter number"
                />
                <div className="input-group">
                  <button type="submit">Generate</button>
                </div>
              </div>
              {/* {itemsOnList && (
                  <a href="uuidList.txt" download>
                    Download to a file
                  </a>
                )} */}
            </div>
          </form>
          <div className="whatis">
            <h3>What is a version 4 UUID?</h3>
            <p>
              A Version 4 UUID is a universally unique identifier that is generated using random
              numbers. The Version 4 UUIDs produced by this site were generated using a secure
              random number generator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
