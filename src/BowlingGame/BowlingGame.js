const OpenFrame = require("../Frame/OpenFrame/OpenFrame");
const SpareFrame = require("../Frame/SpareFrame/SpareFrame");
const StrikeFrame = require("../Frame/StrikeFrame/StrikeFrame");
const BonusBall = require("../Frame/BonusRoll/BonusRoll");

class BowlingGame {
  constructor() {
    this.frames = [];
    this.throws = [];
  }

  openFrame(firstThrow = 0, secondThrow = 0) {
    const openFrame = new OpenFrame(this.throws, firstThrow, secondThrow);
    this.frames.push(openFrame);
  }

  spare(firstThrow, secondThrow) {
    const spare = new SpareFrame(this.throws, firstThrow, secondThrow);
    this.frames.push(spare);
  }

  strike() {
    const strike = new StrikeFrame(this.throws);
    this.frames.push(strike);
  }

  bonusBall(firstThrow) {
    const bonusBall = new BonusBall(this.throws, firstThrow);
    this.frames.push(bonusBall);
  }

  calculateScore() {
    const score = this.frames.reduce(
      (total, frame) => (total += frame.getScore()),
      0
    );
    return score;
  }
}

module.exports = BowlingGame;
