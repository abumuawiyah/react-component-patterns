import React, { useContext } from "react";
import Parent, { Body, Header, Footer } from "./compound";
import { useParentData, ParentContext } from "./compound/Parent";

function ImplCompound({ children }) {
  const { data } = useParentData();
  const parentContext = useContext(ParentContext);
  console.log("s", data, parentContext);
  return (
    <Parent>
      <Header>Header</Header>
      <Body>Body</Body>
      <Footer>Footer</Footer>
    </Parent>
  );
}

export default ImplCompound;
