import React from "react";
import Parent, { Body, Header, Footer } from "./compound";
import useMyState from "./customHooks/useMyState";

function ImplCompound({ children }) {
  const [state] = useMyState();
  console.log("my state", state);
  return (
    <Parent>
      <Header>Header</Header>
      <Body>Body</Body>
      <Footer>Footer</Footer>
    </Parent>
  );
}

export default ImplCompound;
