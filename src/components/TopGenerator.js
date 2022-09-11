import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

export default function TopGenerator({ uuid, handleUuid }) {
 
  return (
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
        <a href="/#" onClick={() => {handleUuid()}}>
          Click{" "}
        </a>{" "}
        to generate another UUID.
      </p>
    </div>
  );
}
