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
        <div className="first-throw"></div>
        <div className="second-throw"></div>
        {isLastFrame ? <div className="third-throw"></div> : null}
      </div>
      <div className="frame-total"></div>
    </div>
  );
};

export default Frame;
