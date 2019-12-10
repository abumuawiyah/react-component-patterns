import React from "react";
import { ParentContext } from "./Parent";

function Footer({ children }) {
  const parentContext = React.useContext(ParentContext);
  const { dispatch } = parentContext;

  function handleClick() {
    dispatch({ type: "CLICK", a: "A", b: "B" });
  }

  return <div onClick={handleClick}>{children}</div>;
}

export default Footer;
