class BowlingGame {
  constructor() {
    this.throws = [];
  }

  openFrame(firstThrow = 0, secondThrow = 0) {
    this.throws.push(firstThrow);
    this.throws.push(secondThrow);
  }

  score() {
    const score = this.throws.reduce(
      (total, currentThrow) => (total += currentThrow)
    );
    return score;
  }
}

module.exports = BowlingGame;
