import React from "react";
import Frame from "../Frame/Frame";

const BowlingGame = () => {
  const frames = [];

  for (let i = 1; i <= 10; i++) {
    const key = `frame-${i}`;
    frames.push(<Frame key={key} id={key} />);
  }

  return (
    <div id="bowling-game" data-testid="bowling-game">
      {frames}
    </div>
  );
};

export default BowlingGame;
