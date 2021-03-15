const Frame = require("../Frame");

class SpareFrame extends Frame {
  constructor(throws, firstThrow, secondThrow) {
    super(throws);
    this.throws.push(firstThrow);
    this.throws.push(secondThrow);
  }

  getScore() {
    return 10 + this.firstFollowingBall();
  }
}

module.exports = SpareFrame;
