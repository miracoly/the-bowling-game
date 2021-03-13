const Frame = require("../Frame");

class SpareFrame extends Frame {
  constructor() {
    super();
    this.score = 10 + this.nextBall();
  }

  nextBall() {
    return 3;
  }
}

module.exports = SpareFrame;
