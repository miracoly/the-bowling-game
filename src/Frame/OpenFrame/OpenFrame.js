class OpenFrame {
  constructor(firstThrow = 0, secondThrow = 0) {
    this.score = firstThrow + secondThrow;
  }

  getScore() {
    return this.score;
  }
}

module.exports = OpenFrame;
