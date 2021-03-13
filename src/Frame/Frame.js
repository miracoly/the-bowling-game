/* This class is meant to be abstract and should not be constructed */
class Frame {
  constructor(score = 0) {
    this._score = score;
  }

  set score(score) {
    this._score = score;
  }

  get score() {
    return this._score;
  }
}

module.exports = Frame;
