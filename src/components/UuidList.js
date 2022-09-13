import React from "react";


export default function UuidList({ itemsOnList}) {
  return (
    <div>
      {itemsOnList && (
        <div className="uuid-container">
          <h2>UUID identifiers</h2>
          <div>
            <ul>
              {itemsOnList}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
