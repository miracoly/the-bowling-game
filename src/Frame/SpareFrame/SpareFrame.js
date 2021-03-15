const Frame = require("../Frame");

class SpareFrame extends Frame {
  constructor(throws = [], firstThrow, secondThrow) {
    super();
    this.throws = throws;
    this.startingThrow = throws.length;
    this.throws.push(firstThrow);
    this.throws.push(secondThrow);
  }

  nextBall() {
    return this.throws[this.startingThrow + 2];
  }

  getScore() {
    return 10 + this.nextBall();
  }
}

module.exports = SpareFrame;
