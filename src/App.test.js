import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

beforeEach(() => render(<App />));

test("Renders BowlingGame component", () => {
  expect(screen.getByTestId("bowling-game")).toBeInTheDocument();
});
