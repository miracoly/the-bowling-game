const Frame = require("./Frame");

test("Gutterball Frame: first and second throw are zeros", () => {
  const frame = new Frame(0, 0);
  expect(frame.score()).toBe(0);
});

test("Three Frame: first and second throw are zeros", () => {
  const frame = new Frame(3, 3);
  expect(frame.score()).toBe(6);
});
