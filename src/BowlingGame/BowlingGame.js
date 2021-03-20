class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(roll) {
    this.rolls.push(roll);
  }

  calculateScore() {
    let rollIndex = 0;
    let total = 0;
    const { rolls } = this;

    for (let frame = 0; frame < 10; frame++) {
      if (rolls[rollIndex] + rolls[rollIndex + 1] === 10) {
        total += 10 + rolls[rollIndex + 2];
      } else {
        total += rolls[rollIndex] + rolls[rollIndex + 1];
      }
      rollIndex += 2;
    }

    return total;
  }
}

module.exports = BowlingGame;
