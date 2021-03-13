const Frame = require("../Frame");

class OpenFrame extends Frame {
  constructor(firstThrow = 0, secondThrow = 0) {
    super(firstThrow + secondThrow);
  }
}

module.exports = OpenFrame;
