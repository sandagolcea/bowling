function Game() {
  nrOfFrames = 10;
  
  this.frame = [];
  for (i=0; i<nrOfFrames; i++) this.frame[i] = {roll1: 0, roll2: 0, total: 0};
  // This initializes frame to:
  // this.frame[0] = {roll1: 0, roll2: 0, total: 0};
  // this.frame[1] = {roll1: 0, roll2: 0, total: 0};

  this.totalPoints = 0;
};

Game.prototype.frameCount = function(){
  var count = 0;
  for (eachFrame in this.frame) count++;
  return count;
};

Game.prototype.knockedPins = function(nrOfPins){
  this.frame[0].roll1 = nrOfPins;
};
