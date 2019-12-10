import React from "react";

const ParentContext = React.createContext({});

function useParentData() {
  const parentContext = React.useContext(ParentContext);

  return parentContext;
}

function Parent({ children }) {
  const [data, setData] = React.useState({});

  function onClick() {
    alert(1);
    setData({ a: "a", b: "b" });
  }

  return (
    <ParentContext.Provider value={{ onClick, data }}>
      <div style={{ border: "2px solid red", margin: 20 }}>{children}</div>
    </ParentContext.Provider>
  );
}

export default Parent;
export { ParentContext, useParentData };
