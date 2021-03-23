import React from "react";
import "./Frame.css";

const Frame = ({ index, isLastFrame, bowlingGame }) => {
  console.log(bowlingGame);
  return (
    <div
      data-testid={`frame-${index}`}
      className={`frame ${isLastFrame ? "last-frame" : null}`}
    >
      <div className="frame-index">{index}</div>
      <div className="throws">
        <div className="first-throw" data-testid={`first-throw-${index}`}>
          0
        </div>
        <div className="second-throw" data-testid={`second-throw-${index}`}>
          0
        </div>
        {isLastFrame ? <div className="third-throw"></div> : null}
      </div>
      <div className="frame-total">
        {bowlingGame.frames[index - 1]
          ? bowlingGame.frames[index - 1].getScore()
          : ""}
      </div>
    </div>
  );
};

export default Frame;
