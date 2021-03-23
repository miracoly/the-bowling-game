import React, { useState } from "react";
import Frame from "../Frame/Frame";
import PinButton from "../PinButton/PinButton";
import BowlingGame from "../../BowlingGame/BowlingGame";
import "./BowlingGameContainer.css";

const BowlingGameContainer = () => {
  const [bowlingGame, setBowlingGame] = useState(new BowlingGame());
  const uiFrame = [];
  const pinButtons = [];

  for (let i = 1; i <= 10; i++) {
    const props = {
      key: `frame-${i}`,
      index: i,
      isLastFrame: i === 10,
    };

    uiFrame.push(<Frame {...props} />);
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
