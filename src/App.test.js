import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("Renders BowlingGame component", () => {
  render(<App />);
  const bowlingGame = screen.getByTestId("bowling-game");
  expect(bowlingGame).toBeInTheDocument();
});

test("BowlingGame contains 10 Frames", () => {
  render(<App />);
  const bowlingGame = screen.getByTestId("bowling-game");
  for (let i = 1; i <= 10; i++) {
    const frame = screen.getByTestId(`frame-${i}`);
    expect(bowlingGame).toContainElement(frame);
  }
});
