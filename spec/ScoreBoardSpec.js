describe("ScoreBoard", function() {

  beforeEach(function() {
    board = new ScoreBoard();
  });

  describe("at the start of the game", function(){


    it("should have 10 frames", function(){
      expect(board.frameCount()).toEqual(2);
    });


    it("should have a total of 0 points", function(){
      expect(board.totalPoints).toEqual(0);
    });

  });

  describe("while playing", function() {
    
    xit("should accept scores",function(){

    });

  });

});