import React from "react";
import "./errorPage.css";

const Circle = React.forwardRef((props, ref) => {
  return <div className="circle" ref={ref}></div>;
});

export default Circle;
