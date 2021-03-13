const Frame = require("../Frame");

class OpenFrame extends Frame {
  constructor(throws = [], firstThrow = 0, secondThrow = 0) {
    super(firstThrow + secondThrow);
    this.throws = throws;
    this.startingThrow = this.throws.length;
    this.throws.push(firstThrow);
    this.throws.push(secondThrow);
  }

  getScore() {
    return this.score;
  }
}

module.exports = OpenFrame;
