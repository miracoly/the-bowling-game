import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BowlingGameContainer from "./BowlingGameContainer";
import BowlingGame from "../../BowlingGame/BowlingGame";
import { manyOpenFrames } from "../../BowlingGame/BowlingGame.test";

let game;

beforeEach(() => {
  game = new BowlingGame();
});

test("UI: GutterBalls: all throws are zeros", () => {
  /* Set game to test case */
  manyOpenFrames(game, 10, 0, 0);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test total score to equal 0 */
  expectTotalScoreToBe(0);

  /* Test first and second throw to equal 0 */
  for (let i = 1; i <= 10; i++) {
    expectFrameToBe(i, 0, 0, 0);
  }
});

test("UI: Threes: all throws are threes", () => {
  /* Set game to test case */
  manyOpenFrames(game, 10, 3, 3);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test UI Score */
  expectTotalScoreToBe(60);

  /* Test first and second throw to equal 3 and frameTotal 6 */
  for (let i = 1; i <= 10; i++) {
    expectFrameToBe(i, 3, 3, 6);
  }
});

test("UI: First Spare, second OpenFrame (3, 5), rest zeros", () => {
  /* Set game to test case */
  game.spare(4, 6);
  game.openFrame(3, 5);
  manyOpenFrames(game, 8, 0, 0);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test UI Score */
  expectTotalScoreToBe(21);

  /* Test UI of first two frames */
  expectFrameToBe(1, 4, 6, 13);
  expectFrameToBe(2, 3, 5, 8);
});

test("UI: First Strike, second OpenFrame (5, 3), rest zeros", () => {
  /* Set game to test case */
  game.strike();
  game.openFrame(5, 3);
  manyOpenFrames(game, 8, 0, 0);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test UI Score */
  expectTotalScoreToBe(26);

  /* Test UI of first two frames */
  expectFrameToBe(1, 10, null, 18);
  expectFrameToBe(2, 5, 3, 8);
});

test("UI: Strike in Final Frame", () => {
  /* Set game to test case */
  manyOpenFrames(game, 9, 0, 0);
  game.strike();
  game.bonusBall(5);
  game.bonusBall(3);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test UI Score */
  expectTotalScoreToBe(18);

  /* Test UI of last frame */
  expectLastFrameToBe(10, 5, 3, 18);
});

/* Helper Functions to test UI */

const expectTotalScoreToBe = (score) => {
  const uiScore = screen.getByTestId("score");
  expect(uiScore).toHaveTextContent(score.toString());
};

const expectFrameToBe = (frameIndex, firstThrow, secondThrow, frameTotal) => {
  const { getByTestId } = screen;
  expect(getByTestId(`first-throw-${frameIndex}`)).toHaveTextContent(
    firstThrow.toString()
  );
  expect(getByTestId(`second-throw-${frameIndex}`)).toHaveTextContent(
    secondThrow !== null ? secondThrow.toString() : ""
  );

  expect(getByTestId(`frame-total-${frameIndex}`)).toHaveTextContent(
    frameTotal.toString()
  );
};

const expectLastFrameToBe = (
  firstThrow,
  secondThrow,
  thirdThrow,
  frameTotal
) => {
  const { getByTestId } = screen;
  expectFrameToBe(10, firstThrow, secondThrow, frameTotal);
  expect(getByTestId("third-throw")).toHaveTextContent(
    thirdThrow !== null ? thirdThrow.toString() : ""
  );
};
