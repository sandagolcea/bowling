function Game() {
  nrOfFrames = 10;
  
  this.frame = [];
  for (i=0; i<nrOfFrames; i++) this.frame[i] = {roll1: 0, roll2: 0, total: 0};
  // This initializes frame to:
  // this.frame[0] = {roll1: 0, roll2: 0, total: 0};
  // this.frame[1] = {roll1: 0, roll2: 0, total: 0};

  this.totalPoints = 0;
  this.rollsLeft = 2;
  this.currentFrame = 0;
};

Game.prototype.frameCount = function(){
  var count = 0;
  for (eachFrame in this.frame) count++;
  return count;
};

Game.prototype.knockedPins = function(nrOfPins){
  if (this.rollsLeft == 2) {
    this.frame[0].roll1 = nrOfPins;
    this.rollsLeft--;
  }
  else if (this.rollsLeft == 1)  {
    this.frame[0].roll2 = nrOfPins;
    this.rollsLeft--;
  }
//   // TODO : increment frame nr
    // reset nr of rollsLeft to 2
};
