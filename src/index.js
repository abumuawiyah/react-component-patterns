import React from "react";
import ReactDOM from "react-dom";

import ImplRenderProps from "./renderProps/component";
import withTheme from "./hoc/withTheme";
import ImplHoc from "./ImplHoc";
import ImplHoc2 from "./ImplHoc2";
import ImplCompound from "./ImplCompound";

import "./styles.css";
import Container from "./slot/Container";
import ImplCloning from "./ImplCloning";
import ImplRenderAsProp from "./renderPropsAsProp/component";
import { locale, jsx } from "./template";

const ComponentHoc1 = withTheme(ImplHoc);
const ComponentHoc2 = withTheme(ImplHoc2);

function Slot1() {
  return <div>Slot 1</div>;
}

function Slot2() {
  return <div>Slot 2</div>;
}

const text2 = data => locale`${data.name}`;
const text3 = data => jsx`
  nama saya ${data.name}<br />
  dan saya suka makan aiskrim
`;
const slot = data =>
  jsx`my name is <span style="color: red;">${data.name}</span>`;

console.log(text2({ name: "azizi" }), slot({ name: "rumaysa" }));

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));
function useToggle(initialOn = false) {
  const [on, setOn] = React.useState(initialOn);
  const toggle = () => setOn(!on);
  const getTogglerProps = (props = {}) => ({
    "aria-expanded": on,
    tabIndex: 0,
    ...props,
    onClick: callAll(props.onClick, toggle)
  });
  return {
    on,
    toggle,
    getTogglerProps
  };
}

function App() {
  const { on, getTogglerProps } = useToggle();

  return (
    <div className="App">
      {text2({ name: "azizi" })}

      {text3({ name: "azizi" })}

      <br />

      {slot({ name: "rumaysa" })}

      <button {...getTogglerProps()}>{on ? "on" : "off"}</button>

      {/* Render props */}
      <ImplRenderProps>
        {({ onTest, state1 }) => (
          <div onClick={() => onTest("state changed")}>
            Render props impl {state1}
          </div>
        )}
      </ImplRenderProps>

      {/* HOC */}
      <div style={{ border: "2px solid red", margin: 20 }}>
        <ImplHoc />
        <ComponentHoc1 />
        <ComponentHoc2 />
      </div>

      {/* Compound component */}
      <ImplCompound />

      {/* Slot & multi slot */}
      <Container slot1={<Slot1 />} slot2={<Slot2 />}>
        <div>I am chilren</div>
      </Container>

      {/* Cloning */}
      <ImplCloning />

      <ImplRenderAsProp
        render={({ state1, setState1 }) => (
          <div onClick={() => setState1(++state1)}>Haha -> {state1}</div>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
