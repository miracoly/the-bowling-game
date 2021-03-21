import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("Renders BowlingGame component", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("bowling-game").textContent).toBe("Bowling Game");
});
