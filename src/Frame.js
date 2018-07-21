function Frame() {
  this.frameScore = [];
}

Frame.prototype.add = function(score) {
  this.frameScore.push(score);
  return this.frameScore
}
