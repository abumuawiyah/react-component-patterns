import React from "react";

function withTheme(WrappedComponent) {
  const themeStyles = {
    fontSize: 34,
    color: "red"
  };

  return class extends React.Component {
    render() {
      return (
        <div style={themeStyles}>
          <WrappedComponent />
        </div>
      );
    }
  };
}

export default withTheme;
