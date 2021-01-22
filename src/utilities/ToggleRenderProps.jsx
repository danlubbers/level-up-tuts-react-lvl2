import React, { useState } from "react";

const ToggleRenderProps = (props) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };
  return (
    <div>
      {props.render({
        on,
        toggle,
        greeting: "Hello AEON",
      })}
    </div>
  );
};

export default ToggleRenderProps;
