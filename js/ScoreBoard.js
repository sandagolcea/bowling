function ScoreBoard() {
  // frame1 : roll1, roll2 ;  frame2: roll1, roll2 etc
  this.hash = {frame1: [0,0], frame2: [0,0]};
  this.totalPoints = 0;
}

ScoreBoard.prototype.frameCount = function(){
      var count = 0;
      for ( property in board.hash ) count++;
      return count;
};
