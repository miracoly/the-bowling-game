const Frame = require("../Frame/Frame");

class BowlingGame {
  constructor() {
    this.frames = [];
  }

  openFrame(firstThrow = 0, secondThrow = 0) {
    const frame = new Frame(firstThrow, secondThrow);
    this.frames.push(frame);
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
