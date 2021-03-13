class SpareFrame {
  constructor() {
    this.score = 10 + this.nextBall();
  }

  nextBall() {
    return 3;
  }

  getScore() {
    return this.score;
  }
}

module.exports = SpareFrame;
