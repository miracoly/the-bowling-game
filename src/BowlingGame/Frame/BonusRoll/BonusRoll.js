const Frame = require("../Frame");

class BonusRoll extends Frame {
  constructor(throws, firstThrow) {
    super(throws, 1);
    this.throws.push(firstThrow);
  }

  getScore() {
    return 0;
  }
}

module.exports = BonusRoll;
