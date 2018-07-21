function Frame() {
  this.frameScore = [];
}

Frame.prototype.add = function(scores) {
  this.frameScore.push(scores);
  return this.frameScore;
}

Frame.prototype.score = function() {
  return this.frameScore.reduce((total, amount) => total + amount);
}

Frame.prototype.isSpare = function() {
  if (this.frameScore.length === 2 && this.score() === 10) {
    return true;
  } else {
    return false;
  }
}

Frame.prototype.isStrike = function() {
  if(this.frameScore.length === 1 && this.score() === 10) {
    return true;
  } else {
    return false;
  }
}
