import React from "react";
import { CopyButton } from "../components";

export default function TopGenerator({ uuid, handleUuid }) {
  return (
    <div className="top-container">
      <h1>Online UUID Generator</h1>
      <p>Your Version 4 UUID:</p>
      <div className="top-container-uuid">
        <h2>{uuid}</h2>
        <CopyButton uuid={uuid} />
      </div>

      <p>
        <button
          className="top-container-click"
          onClick={(e) => {
            handleUuid(e);
          }}
        >
          Click
        </button>{" "}
        to generate another UUID.
      </p>
    </div>
  );
}
