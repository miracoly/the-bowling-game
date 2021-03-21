import React from "react";
import Frame from "../Frame/Frame";
import PinButton from "../PinButton/PinButton";
import "./BowlingGame.css";

const BowlingGame = () => {
  const frames = [];
  const pinButtons = [];

  for (let i = 1; i <= 10; i++) {
    const props = {
      key: `frame-${i}`,
      index: i,
      isLastFrame: i === 10,
    };

    frames.push(<Frame {...props} />);
    pinButtons.push(<PinButton key={i}>{i}</PinButton>);
  }

  return (
    <div className="bowling-game" data-testid="bowling-game">
      <div className="pin-buttons">{pinButtons}</div>
      <div className="frames">{frames}</div>
      <div className="score-container">
        Score: <span className="score">100</span>
      </div>
    </div>
  );
};

export default BowlingGame;
