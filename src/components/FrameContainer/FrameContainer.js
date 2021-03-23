import React from "react";
import "./FrameContainer.css";

const Frame = ({ index, isLastFrame, bowlingGame }) => {
  const displaySecondThrow = () => {
    if (!bowlingGame.frames[index - 1]) {
      return "";
    }

    if (index === 10) {
      return bowlingGame.frames[9].frameSize === 1
        ? bowlingGame.frames[9].firstBonusBall()
        : bowlingGame.frames[9].getSecondThrow();
    }

    return bowlingGame.frames[index - 1].getSecondThrow();
  };

  const displayThirdThrow = () => {
    if (index === 10 && bowlingGame.frames[9]) {
      return bowlingGame.frames[9].frameSize === 1
        ? bowlingGame.frames[9].secondBonusBall()
        : bowlingGame.frames[9].firstBonusBall();
    }
    return "";
  };

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
          {displaySecondThrow()}
        </div>
        {isLastFrame ? (
          <div className="third-throw" data-testid={`third-throw`}>
            {displayThirdThrow()}
          </div>
        ) : null}
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
