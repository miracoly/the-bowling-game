import React from "react";
import "./FrameContainer.css";

const Frame = ({ index, isLastFrame, bowlingGame }) => {
  return (
    <div
      data-testid={`frame-${index}`}
      className={`frame ${isLastFrame ? "last-frame" : null}`}
    >
      <div className="frame-index">{index}</div>
      <div className="throws">
        <div className="first-throw" data-testid={`first-throw-${index}`}>
          {bowlingGame.frames[index - 1]
            ? bowlingGame.frames[index - 1].getFirstThrow()
            : ""}
        </div>
        <div className="second-throw" data-testid={`second-throw-${index}`}>
          {bowlingGame.frames[index - 1]
            ? bowlingGame.frames[index - 1].getSecondThrow()
            : ""}
        </div>
        {isLastFrame ? <div className="third-throw"></div> : null}
      </div>
      <div className="frame-total" data-testid={`frame-total-${index}`}>
        {bowlingGame.frames[index - 1]
          ? bowlingGame.frames[index - 1].getScore()
          : ""}
      </div>
    </div>
  );
};

export default Frame;
