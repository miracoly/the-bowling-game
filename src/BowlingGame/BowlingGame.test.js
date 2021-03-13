const BowlingGame = require("./BowlingGame");

test("GutterBalls: all throws are zeros", () => {
  const game = new BowlingGame();
  for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
    game.openFrame(0, 0);
  }
  expect(game.getScore()).toBe(0);
});

test("Threes: all throws are threes", () => {
  const game = new BowlingGame();
  for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
    game.openFrame(3, 3);
  }
  expect(game.getScore()).toBe(60);
});
