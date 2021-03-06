const BowlingGame = require("./BowlingGame");

beforeEach(() => {
  game = new BowlingGame();
});

test("GutterBalls: all throws are zeros", () => {
  manyOpenFrames(10, 0, 0);
  expect(game.calculateScore()).toBe(0);
});

test("Threes: all throws are threes", () => {
  manyOpenFrames(10, 3, 3);
  expect(game.calculateScore()).toBe(60);
});

test("First Spare, second OpenFrame (3, 5), rest zeros", () => {
  game.spare(4, 6);
  game.openFrame(3, 5);
  manyOpenFrames(8, 0, 0);
  expect(game.calculateScore()).toBe(21);
});

test("First Spare, second OpenFrame (7, 1), rest zeros", () => {
  game.spare(4, 6);
  game.openFrame(7, 1);
  manyOpenFrames(8, 0, 0);
  expect(game.calculateScore()).toBe(25);
});

test("First Strike, second OpenFrame (5, 3), rest zeros", () => {
  game.strike();
  game.openFrame(5, 3);
  manyOpenFrames(8, 0, 0);
  expect(game.calculateScore()).toBe(26);
});

test("Strike in Final Frame", () => {
  manyOpenFrames(9, 0, 0);
  game.strike();
  game.bonusBall(5);
  game.bonusBall(3);
  expect(game.calculateScore()).toBe(18);
});

test("Spare in Final Frame", () => {
  manyOpenFrames(9, 0, 0);
  game.spare(4, 6);
  game.bonusBall(5);
  expect(game.calculateScore()).toBe(15);
});

test("Perfect Game", () => {
  for (let i = 0; i < 10; i++) {
    game.strike();
  }
  game.bonusBall(10);
  game.bonusBall(10);
  expect(game.calculateScore()).toBe(300);
});

test("Alternating Strike & Spare", () => {
  for (let i = 0; i < 5; i++) {
    game.strike();
    game.spare(5, 5);
  }
  game.bonusBall(10);
  expect(game.calculateScore()).toBe(200);
});

const manyOpenFrames = (count = 10, firstThrow = 0, secondThrow = 0) => {
  for (let frameNumber = 0; frameNumber < count; frameNumber++) {
    game.openFrame(firstThrow, secondThrow);
  }
};
