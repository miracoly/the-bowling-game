/* This class is meant to be abstract and should not be constructed */
class Frame {
  constructor(throws = []) {
    this.throws = throws;
    this.startingThrow = throws.length;
  }
}

module.exports = Frame;
