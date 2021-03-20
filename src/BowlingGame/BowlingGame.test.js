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

test("Threes: all throws are threes", () => {
  for (let i = 0; i < 20; i++) {
    game.roll(3);
  }
  expect(game.calculateScore()).toBe(60);
});
