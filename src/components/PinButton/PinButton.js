import React from "react";
import "./PinButton.css";

const PinButton = ({ pins, disabled, children, throwNewBall }) => {
  return (
    <button
      className="pin-button"
      onClick={() => throwNewBall(pins)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PinButton;
