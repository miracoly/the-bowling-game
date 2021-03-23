import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BowlingGameContainer from "./BowlingGameContainer";
import BowlingGame from "../../BowlingGame/BowlingGame";
import { manyOpenFrames } from "../../BowlingGame/BowlingGame.test";

test("UI: GutterBalls: all throws are zeros", () => {
  const game = new BowlingGame();
  manyOpenFrames(game, 10, 0, 0);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test total score to equal 0 */
  const score = screen.getByTestId("score");
  expect(score).toHaveTextContent("0");

  /* Test first and second throw to equal 0 */
  for (let i = 1; i <= 10; i++) {
    const firstThrow = screen.getByTestId(`first-throw-${i}`);
    const secondThrow = screen.getByTestId(`second-throw-${i}`);
    const frameTotal = screen.getByTestId(`frame-total-${i}`);
    expect(firstThrow).toHaveTextContent("0");
    expect(secondThrow).toHaveTextContent("0");
    expect(frameTotal).toHaveTextContent("0");
  }
});

test("UI: Threes: all throws are threes", () => {
  const game = new BowlingGame();
  manyOpenFrames(game, 10, 3, 3);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test total score to equal 60 */
  const score = screen.getByTestId("score");
  expect(score).toHaveTextContent("60");

  /* Test first and second throw to equal 3 and frameTotal 6 */
  for (let i = 1; i <= 10; i++) {
    const firstThrow = screen.getByTestId(`first-throw-${i}`);
    const secondThrow = screen.getByTestId(`second-throw-${i}`);
    const frameTotal = screen.getByTestId(`frame-total-${i}`);
    expect(firstThrow).toHaveTextContent("3");
    expect(secondThrow).toHaveTextContent("3");
    expect(frameTotal).toHaveTextContent("6");
  }
});

test("UI: First Spare, second OpenFrame (3, 5), rest zeros", () => {
  const game = new BowlingGame();
  game.spare(4, 6);
  game.openFrame(3, 5);
  manyOpenFrames(game, 8, 0, 0);

  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test total score to equal 60 */
  const score = screen.getByTestId("score");
  expect(score).toHaveTextContent("21");

  /* Test UI of first two frames */
  const { getByTestId } = screen;
  expect(getByTestId(`first-throw-1`)).toHaveTextContent("4");
  expect(getByTestId(`second-throw-1`)).toHaveTextContent("6");
  expect(getByTestId(`frame-total-1`)).toHaveTextContent("13");
  expect(getByTestId(`first-throw-2`)).toHaveTextContent("3");
  expect(getByTestId(`second-throw-2`)).toHaveTextContent("5");
  expect(getByTestId(`frame-total-2`)).toHaveTextContent("8");
});
