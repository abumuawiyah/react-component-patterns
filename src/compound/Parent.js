import React from "react";

const ParentContext = React.createContext({});

function parentReducer(state, action) {
  const { a, b, type } = action;
  switch (type) {
    case "CLICK":
      return { ...state, a, b };
    default:
      return state;
  }
}

function Parent({ children }) {
  const [parentState, dispatch] = React.useReducer(parentReducer, {
    a: "",
    b: ""
  });

  return (
    <ParentContext.Provider value={{ ...parentState, dispatch }}>
      <div style={{ border: "2px solid red", margin: 20 }}>{children}</div>
    </ParentContext.Provider>
  );
}

export default Parent;
export { ParentContext };
