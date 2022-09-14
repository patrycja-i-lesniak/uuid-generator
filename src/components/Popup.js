import React from "react";

import { MdClose } from "react-icons/md";
import { Button } from "../components";

const styles = {
  fontSize: 20,
  padding: "12px 24px",
  margin: "30px 0 0",
};

export default function Popup({ uuid, handleClose }) {
  return (
    <div className="popup">
      <div>
        <MdClose className="close" onClick={(e) => handleClose(e)} />
        <p>UUID</p>
        <p className="popup-uuid"> {uuid}</p>
        <p>has been copied</p>
      </div>
      <Button style={styles} label="Close" onClick={(e) => handleClose(e)}></Button>
    </div>
  );
}
