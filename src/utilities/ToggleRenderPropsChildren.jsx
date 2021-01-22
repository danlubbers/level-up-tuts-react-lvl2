import { useState } from "react";

const ToggleRenderPropsChildren = (props) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };
  return props.children({
    on,
    toggle,
  });
};

export default ToggleRenderPropsChildren;
