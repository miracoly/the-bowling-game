import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BowlingGameContainer from "./BowlingGameContainer";
import BowlingGame from "../../BowlingGame/BowlingGame";
import { manyOpenFrames } from "../../BowlingGame/BowlingGame.test";

test("GutterBalls: all throws are zeros", () => {
  const game = new BowlingGame();
  manyOpenFrames(10, 0, 0);
  render(<BowlingGameContainer initialBowlingGame={game} />);

  /* Test total score to equal 0 */
  const score = screen.getByTestId("score");
  expect(score).toHaveTextContent("0");

  /* Test first and second throw to equal 0 */
  for (let i = 1; i <= 10; i++) {
    const firstThrow = screen.getByTestId(`first-throw-${i}`);
    const secondThrow = screen.getByTestId(`second-throw-${i}`);
    expect(firstThrow).toHaveTextContent("0");
    expect(secondThrow).toHaveTextContent("0");
  }
});
