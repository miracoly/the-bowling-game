class BowlingGame {
  constructor() {
    this.frames = [];
    this.throws = [];
  }

  calculateScore() {
    const score = this.frames.reduce(
      (total, frame) => (total += frame.getScore()),
      0
    );
    return score;
  }
}

module.exports = BowlingGame;
