/* This class is meant to be abstract and should not be constructed */
class Frame {
  constructor(throws = [], frameSize = 2) {
    this.throws = throws;
    this.startingThrow = throws.length;
    this.frameSize = frameSize;
  }

  bonusBall(count) {
    const { throws, startingThrow, frameSize } = this;
    return throws[startingThrow + frameSize + count];
  }

  firstBonusBall() {
    return this.bonusBall(0);
  }

  secondBonusBall() {
    return this.bonusBall(1);
  }
}

module.exports = Frame;
