const Frame = require("../Frame");

class StrikeFrame extends Frame {
  constructor(throws) {
    super(throws);
    this.throws.push(10);
  }

  firstFollowingBall() {
    return this.throws[this.startingThrow + 1];
  }

  secondFollowingBall() {
    return this.throws[this.startingThrow + 2];
  }

  getScore() {
    return 10 + this.firstFollowingBall() + this.secondFollowingBall();
  }
}

module.exports = StrikeFrame;
