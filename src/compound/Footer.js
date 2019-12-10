import React from "react";
import { ParentContext, useParentData } from "./Parent";

function Footer({ children }) {
  const parentContext = React.useContext(ParentContext);
  const { data } = useParentData();
  console.log("ssss", data);

  return <div onClick={parentContext.onClick}>{children}</div>;
}

export default Footer;
