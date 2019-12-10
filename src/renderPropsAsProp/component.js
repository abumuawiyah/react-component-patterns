import React from "react";

function RenderAsProp({ render }) {
  const [state1, setState1] = React.useState(1);

  return render({ state1, setState1 });
}

export default RenderAsProp;
