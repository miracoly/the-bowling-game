/* This class is meant to be abstract and should not be constructed */
class Frame {
  constructor(score = 0) {
    this.score = score;
  }

  setScore(score) {
    this.score = score;
  }

  getScore() {
    return this.score;
  }
}

module.exports = Frame;
