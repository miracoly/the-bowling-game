/* This class is meant to be abstract and should not be constructed */
class Frame {
  constructor(throws = [], frameSize = 2) {
    this.throws = throws;
    this.startingThrow = throws.length;
    this.frameSize = frameSize;
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
