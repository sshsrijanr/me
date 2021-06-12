import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  const typeTarget = useRef(null);
  const options = {
    strings: [
      "I'm a Frontend Developer",
      "I'm a Backend Engineer",
      "I'm a DevOps Engineer",
      "I'm a Software Development Engineer",
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
