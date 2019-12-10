import React from "react";
import { ParentContext } from "./Parent";

function Body({ children }) {
  const parentContext = React.useContext(ParentContext);
  const { a, b } = parentContext;

  return (
    <div>
      {children} {a + " " + b}
    </div>
  );
}

export default Body;
