import React from "react";

export default function Button({ label, style, onClick, icon, children }) {
  return (
    <button onClick={onClick} style={style}>
      {children}
      {label}
    </button>
  );
}
