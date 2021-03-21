import React from "react";
import Frame from "../Frame/Frame";
import "./BowlingGame.css";

const BowlingGame = () => {
  const frames = [];

  for (let i = 1; i <= 10; i++) {
    const props = {
      key: `frame-${i}`,
      index: i,
      isLastFrame: i === 10,
    };

    frames.push(<Frame {...props} />);
  }

  return (
    <div className="bowling-game" data-testid="bowling-game">
      {frames}
    </div>
  );
};

export default BowlingGame;
