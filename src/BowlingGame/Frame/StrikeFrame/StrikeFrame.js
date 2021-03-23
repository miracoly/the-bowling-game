import Frame from "../Frame";

class StrikeFrame extends Frame {
  constructor(throws) {
    super(throws, 1);
    this.throws.push(10);
  }

  getScore() {
    return 10 + this.firstBonusBall() + this.secondBonusBall();
  }
}

export default StrikeFrame;
