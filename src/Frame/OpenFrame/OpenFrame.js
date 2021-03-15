const Frame = require("../Frame");

class OpenFrame extends Frame {
  constructor(throws, firstThrow = 0, secondThrow = 0) {
    super(throws, firstThrow + secondThrow);
    this.throws.push(firstThrow);
    this.throws.push(secondThrow);
  }

  getScore() {
    const { throws, startingThrow } = this;
    return throws[startingThrow] + throws[startingThrow + 1];
  }
}

module.exports = OpenFrame;
