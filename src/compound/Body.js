import React from "react";
import { ParentContext } from "./Parent";

function Body({ children }) {
  const parentContext = React.useContext(ParentContext);
  return <div onClick={parentContext.onClick}>{children}</div>;
}

export default Body;
