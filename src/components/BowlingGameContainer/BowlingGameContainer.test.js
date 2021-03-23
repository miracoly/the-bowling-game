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

  /* Test UI */
  expectTotalScoreToBe(21);
  expectFrameToBe(1, 4, 6, 13);
  expectFrameToBe(2, 3, 5, 8);
});

test("UI: First Strike, second OpenFrame (5, 3), rest zeros", () => {
  /* Set game to test case */
  game.strike();
  game.openFrame(5, 3);
  manyOpenFrames(game, 8, 0, 0);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test UI */
  expectTotalScoreToBe(26);
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

  /* Test UI  */
  expectTotalScoreToBe(18);
  expectLastFrameToBe(10, 5, 3, 18);
});

test("UI: Spare in Final Frame", () => {
  /* Set game to test case */
  manyOpenFrames(game, 9, 0, 0);
  game.spare(4, 6);
  game.bonusBall(5);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test UI  */
  expectTotalScoreToBe(15);
  expectLastFrameToBe(4, 6, 5, 15);
});

test("UI: Perfect Game", () => {
  /* Set game to test case */
  for (let i = 0; i < 10; i++) {
    game.strike();
  }
  game.bonusBall(10);
  game.bonusBall(10);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test UI  */
  expectTotalScoreToBe(300);
  /* Test first and ninth throw to be strike */
  for (let i = 1; i <= 9; i++) {
    expectFrameToBe(i, 10, null, 30);
  }
  expectLastFrameToBe(10, 10, 10, 30);
});

test("Alternating Strike & Spare", () => {
  /* Set game to test case */
  for (let i = 0; i < 5; i++) {
    game.strike();
    game.spare(5, 5);
  }
  game.bonusBall(10);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test UI  */
  expectTotalScoreToBe(200);
  /* Test first and ninth throw to be strike */
  for (let i = 1; i < 9; i += 2) {
    expectFrameToBe(i, 10, null, 20);
    expectFrameToBe(i + 1, 5, 5, 20);
  }
  expectFrameToBe(9, 10, null, 20);
  expectLastFrameToBe(5, 5, 10, 20);
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

  if (secondThrow === null) {
    expect(getByTestId(`second-throw-${frameIndex}`)).toBeEmptyDOMElement();
  } else {
    expect(getByTestId(`second-throw-${frameIndex}`)).toHaveTextContent(
      secondThrow.toString()
    );
  }

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
