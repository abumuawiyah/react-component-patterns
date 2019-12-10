import React from "react";

function myReducer(state, action) {
  const { a, b, type } = action;
  switch (type) {
    case "CLICK":
      return { ...state, a, b };
    default:
      return state;
  }
}

function useMyState() {
  const [state, dispatch] = React.useReducer(myReducer, {
    a: "",
    b: ""
  });
  React.useEffect(() => {
    dispatch({ type: "CLICK", a: "1", b: "2" });
  }, []);

  return [state, dispatch];
}

export default useMyState;
