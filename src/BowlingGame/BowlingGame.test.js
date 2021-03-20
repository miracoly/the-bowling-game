const BowlingGame = require("./BowlingGame");

beforeEach(() => {
  game = new BowlingGame();
});

test("GutterBalls: all throws are zeros", () => {
  for (let i = 0; i < 20; i++) {
    game.roll(0);
  }
  expect(game.calculateScore()).toBe(0);
});
