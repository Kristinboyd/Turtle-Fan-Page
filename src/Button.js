// Libraries
import React from "react";

export default function Button({ buttonName, onClick, style }) {
  return (
    <button onClick={onClick} buttonName={buttonName} style={style}>
      {buttonName}
    </button>
  );
}
