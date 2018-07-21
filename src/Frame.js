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
