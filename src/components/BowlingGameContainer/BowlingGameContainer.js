import React, { useState } from "react";
import BowlingGame from "../../BowlingGame/BowlingGame";
import FrameContainer from "../FrameContainer/FrameContainer";
import PinButton from "../PinButton/PinButton";
import cloneDeep from "lodash/cloneDeep";
import "./BowlingGameContainer.css";

const BowlingGameContainer = ({ initialBowlingGame }) => {
  const [bowlingGame, setBowlingGame] = useState(initialBowlingGame);
  const [currentFirstThrow, setCurrentFirstThrow] = useState(null);
  const [gameIsRunning, setGameIsRunning] = useState(true);
  const [waitingForFirstBonusBall, setWaitingForFirstBonusBall] = useState(
    false
  );
  const [waitingForSecondBonusBall, setWaitingForSecondBonusBall] = useState(
    false
  );
  const uiFrame = [];
  const pinButtons = [];

  const initiatePinButtions = () => {
    for (let i = 0; i <= 10; i++) {
      pinButtons.push(
        <PinButton
          key={i}
          pins={i}
          disabled={!gameIsRunning}
          throwNewBall={throwNewBall}
        >
          {i}
        </PinButton>
      );
    }
  };

  const newGame = () => {
    setBowlingGame(new BowlingGame());
    setGameIsRunning(true);
    initiatePinButtions(false);
    setCurrentFirstThrow(null);
    setWaitingForFirstBonusBall(false);
    setWaitingForSecondBonusBall(false);
  };

  const addOpenFrame = (firstThrow, secondThrow) => {
    const updatedGame = cloneDeep(bowlingGame);
    updatedGame.openFrame(firstThrow, secondThrow);
    return updatedGame;
  };

  const addSpare = (firstThrow, secondThrow) => {
    const updatedGame = cloneDeep(bowlingGame);
    updatedGame.spare(firstThrow, secondThrow);
    return updatedGame;
  };

  const addStrike = () => {
    const updatedGame = cloneDeep(bowlingGame);
    updatedGame.strike();
    return updatedGame;
  };

  const addBonusBall = (bonusBall) => {
    const updatedGame = cloneDeep(bowlingGame);
    updatedGame.bonusBall(bonusBall);
    return updatedGame;
  };

  const throwNewBall = (pins) => {
    const isLastFrame = bowlingGame.frames.length >= 9;
    const isStrike = currentFirstThrow === null && pins === 10;
    const isSpare =
      currentFirstThrow !== null && currentFirstThrow + pins === 10;
    const isOpenFrame =
      currentFirstThrow !== null &&
      currentFirstThrow + pins < 10 &&
      currentFirstThrow + pins >= 0;

    if (!isLastFrame) {
      if (isStrike) {
        setBowlingGame(addStrike());
        setCurrentFirstThrow(null);
        return;
      }

      if (isSpare) {
        setBowlingGame(addSpare(currentFirstThrow, pins));
        setCurrentFirstThrow(null);
        return;
      }

      if (isOpenFrame) {
        setBowlingGame(addOpenFrame(currentFirstThrow, pins));
        setCurrentFirstThrow(null);
        return;
      }

      setCurrentFirstThrow(pins);
    } else {
      /* Last Frame */

      if (isOpenFrame) {
        setBowlingGame(addOpenFrame(currentFirstThrow, pins));
        setCurrentFirstThrow(null);
        setGameIsRunning(false);
        return;
      }

      if (isSpare) {
        setBowlingGame(addSpare(currentFirstThrow, pins));
        setCurrentFirstThrow(null);
        setWaitingForFirstBonusBall(true);
        return;
      }

      if (isStrike) {
        setBowlingGame(addStrike());
        setCurrentFirstThrow(null);
        setWaitingForFirstBonusBall(true);
        setWaitingForSecondBonusBall(true);
        return;
      }

      if (waitingForFirstBonusBall) {
        setBowlingGame(addBonusBall(pins));
        setWaitingForFirstBonusBall(false);
        if (!waitingForSecondBonusBall) {
          setGameIsRunning(false);
        }
        return;
      }

      if (waitingForSecondBonusBall) {
        setBowlingGame(addBonusBall(pins));
        setWaitingForFirstBonusBall(false);
        setGameIsRunning(false);
        return;
      }

      setCurrentFirstThrow(pins);
    }
  };

  /* Initialisation */
  for (let i = 1; i <= 10; i++) {
    const props = {
      key: `frame-${i}`,
      index: i,
      isLastFrame: i === 10,
      bowlingGame,
    };
    uiFrame.push(<FrameContainer {...props} />);
  }
  initiatePinButtions(false);

  return (
    <div className="bowling-game" data-testid="bowling-game">
      <div className="controls">
        <button className="button" onClick={newGame}>
          New Game
        </button>
        <div className="pin-buttons">{pinButtons}</div>
      </div>
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
