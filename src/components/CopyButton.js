import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

export default function CopyButton({ uuid }) {
  return (
    <div>
      <CopyToClipboard text={uuid} onCopy={() => [alert("Copied uuid", { uuid })]}>
        <button style={{ width: "100px" }}>
          <AiOutlineCopy />
          Copy{" "}
        </button>
      </CopyToClipboard>
    </div>
  );
}
