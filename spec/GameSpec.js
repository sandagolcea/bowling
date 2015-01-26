describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  describe("at the start", function(){

    it("should have 10 frames", function(){
      expect(game.frameCount()).toEqual(10);
    });

    it("should begin at the first frame", function(){
      expect(game.frameNr).toEqual(0);
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
      game.knockPins(3);
      expect(game.frame[0].roll1).toEqual(3);
    });

    it("should know if you have rolled once",function(){
      game.knockPins(3);
      expect(game.rollsLeft).toEqual(1);
    });
  
    it("should get to the next frame after two rolls",function(){
      game.knockPins(3);
      game.knockPins(5);
      expect(game.frameNr).toEqual(1);
      expect(game.rollsLeft).toEqual(2);
    });

    it("should get the score for a frame's rolls", function(){
      game.knockPins(6);
      game.knockPins(2);
      expect(game.frame[0].roll1).toEqual(6);
      expect(game.frame[0].roll2).toEqual(2);
    });

    it("should calculate the score in a frame", function(){
      game.knockPins(6);
      game.knockPins(2);
      expect(game.frame[0].total).toEqual(8);
    });

    it("should calculate the total", function(){
      // Frame1
      game.knockPins(6);
      game.knockPins(2);
      // Frame2
      game.knockPins(3);
      game.knockPins(4);
      // Total : 6 + 2 + 3 + 4 = 15
      expect(game.calculateTotal()).toEqual(15);  
    });

  });

  describe("special case:", function() {
    
    it("strike - should end frame", function(){
      // should set frame.roll2 to null
      // should set frame.total to 10
      // should get to the next frame
      game.knockPins(10);
      expect(game.frame[0].roll2).toBe(null);
      expect(game.frame[0].total).toEqual(10);
      expect(game.frameNr).toEqual(1);
    });

    it("strike - should give bonus at next frame", function(){
      game.knockPins(10);
      game.knockPins(5);
      game.knockPins(4);
      // TODO: implement test on next line:
      // expect(game.frame[0].total).toEqual(19);
      expect(game.calculateTotal()).toEqual(19);
    });


    xit("spare - bonus", function(){
      
    });

  });

});