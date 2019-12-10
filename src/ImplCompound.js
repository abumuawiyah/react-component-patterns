import React from "react";
import Parent, { Body, Header, Footer } from "./compound";

function ImplCompound({ children }) {
  return (
    <Parent>
      <Header>Header</Header>
      <Body>Body</Body>
      <Footer>Footer</Footer>
    </Parent>
  );
}

export default ImplCompound;
