import React, { useState } from "react";

const Button = (props) => {
  const [hover, setHover] = useState(false);
  const btnStyles = {
    // padding: "1rem 1.5rem",
    width: props.width,
    height: props.height,
    backgroundColor:
      props.bg === "transparent"
        ? `${props.bg}`
        : `${!hover ? "var(--color-lightblue)" : "var(--color-blue)"}`,
    color:
      props.bg === "transparent" ? "var(--color-blue)" : "var(--color-white)",
    boxShadow:
      props.bg === "transparent"
        ? "0px 4px 10px 0px rgba(20, 20, 43, 0.04)"
        : "none",
    border:
      props.bg === "transparent" ? "1px solid var(--border-color)" : "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    transition: ".1s linear",
  };
  return (
    <button
      className="customButton"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={btnStyles}
    >
      {props.content}
    </button>
  );
};

export default Button;
