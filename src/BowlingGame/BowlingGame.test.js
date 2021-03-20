const BowlingGame = require("./BowlingGame");

beforeEach(() => {
  game = new BowlingGame();
});

test("GutterBalls: all throws are zeros", () => {
  rollMany(20, 0);
  expect(game.getScore()).toBe(0);
});

test("Threes: all throws are threes", () => {
  rollMany(20, 3);
  expect(game.getScore()).toBe(60);
});

test("Spare, total 23", () => {
  game.roll(4);
  game.roll(6);
  game.roll(5);
  game.roll(3);
  rollMany(16, 0);
  expect(game.getScore()).toBe(23);
});

test("Strike, total 29", () => {
  game.roll(10);
  game.roll(5);
  game.roll(3);
  game.roll(2);
  game.roll(1);
  rollMany(14, 0);
  expect(game.getScore()).toBe(29);
});

const rollMany = (count, roll) => {
  for (let i = 0; i < count; i++) {
    game.roll(roll);
  }
};
