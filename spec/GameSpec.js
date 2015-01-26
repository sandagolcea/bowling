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

    it ("should let you roll twice per frame", function(){
      expect(game.rollsLeft).toEqual(2);
    });

  });

  describe("while playing", function() {

    it("should accept knocked down pins in the first roll",function(){
      game.knockedPins(3);
      expect(game.frame[0].roll1).toEqual(3);
    });

    it("should know if you have rolled once",function(){
      game.knockedPins(3);
      expect(game.rollsLeft).toEqual(1);
    });
  
    it("should not let you roll more than twice",function(){
      game.knockedPins(3);
      game.knockedPins(5);
      expect(game.rollsLeft).toEqual(0);
    });

  });

});