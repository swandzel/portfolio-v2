import React from "react";
import "./Button.scss";

const Button = ({ text, backgroundColor = "#dd7dff", width = "294px" }) => {
  return (
    <button style={{ backgroundColor: backgroundColor, width: `${width}` }}>
      {text}
    </button>
  );
};

export default Button;
