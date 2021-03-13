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

test("First Throw Spare, second OpenFrame, rest zeros", () => {
  game.spare(4, 6);
  game.openFrame(3, 5);
  manyOpenFrames(8, 0, 0);
  expect(game.getScore()).toBe(21);
});

const manyOpenFrames = (count = 10, firstThrow = 0, secondThrow = 0) => {
  for (let frameNumber = 0; frameNumber < count; frameNumber++) {
    game.openFrame(firstThrow, secondThrow);
  }
};