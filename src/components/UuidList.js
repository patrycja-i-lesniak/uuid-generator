import React from 'react';

export default function UuidList({itemOnList}) {

  return (
    <div>
      {itemOnList && (
        <div className="uuid-container">
          <h2>UUID identifiers</h2>
          <ul>{itemOnList}</ul>
        </div>
      )}
    </div>
  );
}
