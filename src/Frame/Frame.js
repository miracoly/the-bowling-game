/* This class is meant to be abstract and should not be constructed */
class Frame {
  constructor(throws = []) {
    this.throws = throws;
    this.startingThrow = throws.length;
    this.frameSize = 2;
  }

  firstBonusBall() {
    const { throws, startingThrow, frameSize } = this;
    return throws[startingThrow + frameSize];
  }

  secondBonusBall() {
    const { throws, startingThrow, frameSize } = this;
    return throws[startingThrow + frameSize + 1];
  }
}

module.exports = Frame;
