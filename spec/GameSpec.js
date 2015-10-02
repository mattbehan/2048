describe("Game", function() {
  describe("Initializing a new game", function(){
    it ("initializes a game with no arguments to random parameters", function() {
      game = new Game()
      expect(game.positions.match(/2/g).length).toEqual(2)
      expect(game.positions.match(/0/g).length).toEqual(14)
    })

    it ("initializes a game with a string argument to a board that represents that string", function(){
      game = new Game('0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0')
      expect(game.positions).toEqual('0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0')
    })
  });

  describe("toString", function(){
    it("transforms the string into a board", function(){
     game = new Game('0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0');
     console.log(game.toString());
      expect(game.toString()).toEqual('0,0,0,0\n2,0,2,0\n0,0,0,0\n0,0,0,0\n')
    })
  });

  describe("spawnBlock", function(){

  })

})
