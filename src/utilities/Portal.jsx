import { useEffect } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

const Portal = (props) => {
  const { children } = props;
  const el = document.createElement("div");
  useEffect(() => {
    console.log(el);
    portalRoot.appendChild(el);

    return () => {
      portalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
