const OpenFrame = require("../OpenFrame/OpenFrame");
const SpareFrame = require("../SpareFrame/SpareFrame");

class BowlingGame {
  constructor() {
    this.frames = [];
  }

  openFrame(firstThrow = 0, secondThrow = 0) {
    const openFrame = new OpenFrame(firstThrow, secondThrow);
    this.frames.push(openFrame);
  }

  spare(firstThrow, secondThrow) {
    const spare = new SpareFrame(firstThrow, secondThrow);
    this.frames.push(spare);
  }

  getScore() {
    const score = this.frames.reduce(
      (total, frame) => (total += frame.getScore()),
      0
    );
    return score;
  }
}

module.exports = BowlingGame;
