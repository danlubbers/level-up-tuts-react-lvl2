import React, { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };
  return (
    <div>
      {on && <p>Toggle Me</p>}
      <button onClick={toggle}>Show/Hide</button>
    </div>
  );
};

export default Toggle;
