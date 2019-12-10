import React from "react";
import Container from "./clone/Container";

function SpecificComponent({ children, data, onClick }) {
  return (
    <div onClick={onClick}>
      {children} {data.a} -> {data.b}
    </div>
  );
}

function ImplCloning() {
  return (
    <Container>
      <SpecificComponent>SpecificComponent 1</SpecificComponent>
      <SpecificComponent>SpecificComponent 2</SpecificComponent>
      <SpecificComponent>SpecificComponent 3</SpecificComponent>
    </Container>
  );
}

export default ImplCloning;
