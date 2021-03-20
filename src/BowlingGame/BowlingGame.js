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
      total += rolls[rollIndex] + rolls[rollIndex + 1];
      rollIndex += 2;
    }

    return total;
  }
}

module.exports = BowlingGame;
