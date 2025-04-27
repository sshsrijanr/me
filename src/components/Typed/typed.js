import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  const typeTarget = useRef(null);
  const options = {
    strings: [
      "I'm a Backend Developer",
      "I'm a AI Agent Developer",
      "I'm a Software Engineer",
    ],
    typeSpeed: 60,
    backSpeed: 60,
  };
  useEffect(() => {
    const typed = new Typed(typeTarget.current, options);

    return () => {
      typed.destroy();
    };
  });

  return <span ref={typeTarget} />;
};

export default TypedComponent;
