import React from "react";
import "./Frame.css";

const Frame = ({ index, isLastFrame }) => {
  return (
    <div
      data-testid={`frame-${index}`}
      className={`frame ${isLastFrame ? "last-frame" : null}`}
    >
      <div className="frame-index">{index}</div>
      <div className="throws">
        <div className="first-throw">3</div>
        <div className="second-throw">4</div>
        {isLastFrame ? <div className="third-throw">4</div> : null}
      </div>
      <div className="frame-total">7</div>
    </div>
  );
};

export default Frame;
