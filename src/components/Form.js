import React from "react";
import { Button } from "components";

const styles = {
  width: "140px",
  fontSize: "20px",
  backgroundColor: "#596275",
  borderRadius: "0 5px 5px 0",
  border: "1px solid #596275",
  transform: "unset",
};

export default function Form({ handleSubmit, handleItems }) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-inline">
        <label className="form-label">How Many?</label>
        <div className="input-group">
          <input
            type="number"
            onChange={(e) => {
              handleItems(e);
            }}
            placeholder="Enter number"
          />
          <Button className="button" type="submit" label="Generate" style={styles} />
        </div>
      </div>
    </form>
  );
}
