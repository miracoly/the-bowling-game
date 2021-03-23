/* This class is meant to be abstract and should not be constructed */
class Frame {
  constructor(throws = [], frameSize = 2) {
    this.throws = throws;
    this.startingThrow = throws.length;
    this.frameSize = frameSize;
  }

  getFirstThrow() {
    const { throws, startingThrow } = this;
    return throws[startingThrow];
  }

  getSecondThrow() {
    const { throws, startingThrow, frameSize } = this;
    return frameSize === 2 ? throws[startingThrow + 1] : "";
  }

  bonusBall(count) {
    const { throws, startingThrow, frameSize } = this;
    const result = throws[startingThrow + frameSize + count];
    return result ? result : 0;
  }

  firstBonusBall() {
    return this.bonusBall(0);
  }

  secondBonusBall() {
    return this.bonusBall(1);
  }
}

export default Frame;
