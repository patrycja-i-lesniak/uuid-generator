import React from "react";
import { Form, Button } from "../components";

const styles = {
  backgroundColor: "#c44569",
  fontSize: 24,
  padding: "20px 30px",
  margin: "20px 0 40px",
};

export default function Card({ uuid, handleUuid, handleSubmit, handleItems }) {
  return (
    <div className="card">
      <h2 className="card-header"> Version 4UUID Generator</h2>
      <div className="card-body">
        <div className="card-button-container">
          <Button
            onClick={(e) => {
              handleUuid(e);
            }}
            label="Generate a version 4 UUID"
            style={styles}
          />
        </div>

        <h3>Bulk Version 4 UUID Generation</h3>
        <div className="form-box">
          <Form handleSubmit={handleSubmit} handleItems={handleItems} />
          <div className="whatis">
            <h3>What is a version 4 UUID?</h3>
            <p>
              A Version 4 UUID is a universally unique identifier that is generated using random
              numbers. The Version 4 UUIDs produced by this site were generated using a secure
              random number generator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
