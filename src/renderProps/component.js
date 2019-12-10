import React from "react";

function Component1({ children }) {
  const [state1, setState1] = React.useState("state 1");

  function onTest(value) {
    setState1(value);
  }

  return (
    <div style={{ border: "2px solid red", margin: 20 }}>
      {children({ onTest, state1 })}
    </div>
  );
}

export default Component1;
