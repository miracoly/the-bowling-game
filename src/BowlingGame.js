class BowlingGame {
  constructor() {
    this.frames = [];
  }

  openFrame(firstThrow = 0, secondThrow = 0) {
    const frame = new Frame(firstThrow, secondThrow);
    this.frames.push(frame);
  }

  score() {
    const score = this.frames.reduce(
      (total, frame) => (total += frame.score())
    );
    return score;
  }
}

module.exports = BowlingGame;
