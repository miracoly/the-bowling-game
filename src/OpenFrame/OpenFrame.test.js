const OpenFrame = require("./OpenFrame");

test("Gutterball OpenFrame: first and second throw are zeros", () => {
  const frame = new OpenFrame(0, 0);
  expect(frame.getScore()).toBe(0);
});

test("Three OpenFrame: first and second throw are zeros", () => {
  const frame = new OpenFrame(3, 3);
  expect(frame.getScore()).toBe(6);
});
