function Game() {
  nrOfFrames = 10;
  
  this.frame = [];
  for (i=0; i<nrOfFrames; i++) this.frame[i] = {roll1: 0, roll2: 0, total: 0};
  // This initializes frame to:
  // this.frame[0] = {roll1: 0, roll2: 0, total: 0};
  // this.frame[1] = {roll1: 0, roll2: 0, total: 0};

  this.totalPoints = 0;
  this.rollsLeft = 2;
  this.frameNr = 0;
};

Game.prototype.frameCount = function(){
  var count = 0;
  for (eachFrame in this.frame) count++;
  return count;
};

Game.prototype.knockPins = function(nrOfPins){
  // first shot:
  if (this.rollsLeft == 2) {
    if (nrOfPins == 10) {
      // it's a strike ; clean & clear frame
      this.frame[this.frameNr].roll1 = nrOfPins;
      this.frame[this.frameNr].roll2 = null;
      this.frame[this.frameNr].total = nrOfPins;
      this._nextFrame();
    }
    else {
      this.frame[this.frameNr].roll1 = nrOfPins;
      this.rollsLeft--;
    }
  }
  // second shot:
  else if (this.rollsLeft == 1)  {
    this.frame[this.frameNr].roll2 = nrOfPins;
    // calculate current frame total
    this.frame[this.frameNr].total = this.frame[this.frameNr].roll1 + this.frame[this.frameNr].roll2;
    this._nextFrame();
  }
};

Game.prototype.calculateTotal =  function(){
  totalPoints = 0;
  this.frame.forEach(function(eachFrame){
    // console.log(eachFrame.total);
    totalPoints = totalPoints + eachFrame.total;
  });
  return totalPoints;
};

Game.prototype._nextFrame = function(){
  this.frameNr++;
  this.rollsLeft=2;
};