import React from "react";

import { MdClose } from "react-icons/md";


export default function Popup({ uuid, handleClose }) {
  return (
    <div className="popup">
      <div>
        <MdClose className='close' onClick={(e) => handleClose(e)} />
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
