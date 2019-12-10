import React from "react";

export const getChildType = child => {
  return (
    (child.type && child.type.target && child.type.target.displayName) ||
    (child.type && child.type.displayName)
  );
};

function Container({ children }) {
  const childArray = React.Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    return React.cloneElement(child, {
      data: { a: "A", b: "B" },
      onClick: () => alert("Clicked!")
    });
  });

  return (
    <div style={{ border: "2px solid red", margin: 20 }}>
      {childrenWithProps}
    </div>
  );
}

export default Container;
