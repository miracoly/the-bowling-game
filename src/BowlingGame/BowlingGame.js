class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(roll) {
    this.rolls.push(roll);
  }

  getScore() {
    return this.calculateScore()();
  }

  calculateScore() {
    let rollIndex = 0;
    let total = 0;
    const { rolls } = this;

    const isSpare = () => rolls[rollIndex] + rolls[rollIndex + 1] === 10;
    const isStrike = () => rolls[rollIndex] === 10;

    return () => {
      for (let frame = 0; frame < 10; frame++) {
        if (isSpare()) {
          total += 10 + rolls[rollIndex + 2];
          rollIndex += 2;
        } else if (isStrike()) {
          total += 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
          rollIndex++;
        } else {
          total += rolls[rollIndex] + rolls[rollIndex + 1];
          rollIndex += 2;
        }
      }

      return total;
    };
  }
}

module.exports = BowlingGame;
