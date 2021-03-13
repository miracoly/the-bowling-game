const BowlingGame = require("./BowlingGame");

beforeEach(() => {
  game = new BowlingGame();
});

test("GutterBalls: all throws are zeros", () => {
  manyOpenFrames(10, 0, 0);
  expect(game.getScore()).toBe(0);
});

test("Threes: all throws are threes", () => {
  manyOpenFrames(10, 3, 3);
  expect(game.getScore()).toBe(60);
});

const manyOpenFrames = (count = 10, firstThrow = 0, secondThrow = 0) => {
  for (let frameNumber = 0; frameNumber < count; frameNumber++) {
    game.openFrame(firstThrow, secondThrow);
  }
};
