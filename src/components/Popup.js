import React from "react";

export default function Popup({ uuid, handleClose }) {
  return (
    <div className="popup">
      <div>
        <p>UUID</p>
        <p className="popup-uuid"> {uuid}</p>
        <p>has been copied</p>
      </div>

      <button className="popup-button" onClick={(e) => handleClose(e)}>
        close
      </button>
    </div>
  );
}
