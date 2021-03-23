import React, { useState } from "react";
import FrameContainer from "../FrameContainer/FrameContainer";
import PinButton from "../PinButton/PinButton";
import "./BowlingGameContainer.css";

const BowlingGameContainer = ({ initialBowlingGame }) => {
  const [bowlingGame, setBowlingGame] = useState(initialBowlingGame);
  const uiFrame = [];
  const pinButtons = [];

  for (let i = 1; i <= 10; i++) {
    const props = {
      key: `frame-${i}`,
      index: i,
      isLastFrame: i === 10,
      bowlingGame,
    };

    uiFrame.push(<FrameContainer {...props} />);
    pinButtons.push(<PinButton key={i}>{i}</PinButton>);
  }

  return (
    <div className="bowling-game" data-testid="bowling-game">
      <div className="pin-buttons">{pinButtons}</div>
      <div className="frames">{uiFrame}</div>
      <div className="score-container">
        Score:{" "}
        <span className="score" data-testid="score">
          {bowlingGame.calculateScore()}
        </span>
      </div>
    </div>
  );
};

export default BowlingGameContainer;
