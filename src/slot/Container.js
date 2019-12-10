import React from "react";

function Container({ children, slot1, slot2 }) {
  return (
    <div style={{ border: "2px solid red", margin: 20 }}>
      {slot1}
      {children}
      {slot2}
    </div>
  );
}

export default Container;
