describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  describe("at the start", function(){


    it("should have 10 frames", function(){
      expect(game.frameCount()).toEqual(10);
    });


    it("should have a total of 0 points", function(){
      expect(game.totalPoints).toEqual(0);
    });

  });

  describe("while playing", function() {
    
    it("should accept scoring",function(){
      game.knockedPins(3);
      expect(game.frame[0].roll1).toEqual(3);
    });

  });

});