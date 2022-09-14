import React from "react";
import { CopyButton, Button } from "../components";

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
        <a
          href="/"
          onClick={(e) => {
            handleUuid(e);
          }}
          label="Click"
          style={{ color: "#f8a5c2" }}
        >
          Click
        </a>{" "}
        to generate another UUID.
      </p>
    </div>
  );
}
