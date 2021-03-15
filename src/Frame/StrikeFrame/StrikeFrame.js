const Frame = require("../Frame");

class StrikeFrame extends Frame {
  constructor(throws) {
    super(throws);
    this.throws.push(10);
    this.frameSize = 1;
  }

  getScore() {
    return 10 + this.firstFollowingBall() + this.secondFollowingBall();
  }
}

module.exports = StrikeFrame;
