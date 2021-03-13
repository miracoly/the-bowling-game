const BowlingGame = require("./BowlingGame");

test("GutterBalls: all throws are zeros", () => {
  const game = new BowlingGame();
  expect(game.getScore()).toBe(0);
});
