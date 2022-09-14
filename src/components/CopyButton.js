import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import { Popup, Backdrop, Button } from "../components";

export default function CopyButton({ uuid }) {
  const [show, setShow] = useState(false);

  function handleCopy(e) {
    console.log("UUID", uuid, "has been copied:");
    setShow(true);
  }

  function handleClose(e) {
    e.preventDefault();
    setShow(false);
  }

  function toggleShow() {
    setShow(!show);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div>
      {show && (
        <>
          <Popup handleClose={handleClose} uuid={uuid} />
          <Backdrop className="backdrop" toggleShow={toggleShow} />
        </>
      )}
      <CopyToClipboard
        text={uuid}
        onCopy={(e) => {
          handleCopy(e);
        }}
      >
        <Button style={{ width: "100px" }} label="Copy">
          <AiOutlineCopy />
        </Button>
      </CopyToClipboard>{" "}
    </div>
  );
}
