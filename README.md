# 256! A 2048 Clone.

## Learning Competencies

* Build a JavaScript interface independent of a backend.
* Build a complex JS model independent of the interface.
* Integrate the JS model with the HTML interface.
* Use the Mousetrap.js library to bind keyboard events.

## Summary

Let's build a clone of the game [2048](http://gabrielecirulli.github.io/2048/).

We will implement the core game play. Play the game for a few minutes so U understand the rules of the game. How do blocks spawn? When does the game disallow a movement? How do blocks merge? How do blocks slide? Try to write a specification of how the game mechanics work.

## Releases

**Use [Jasmine](https://github.com/jasmine/jasmine) to unit test in all pieces of Release 0 and 1. The only reason to use the browser for Release 0 and 1 is only to see your tests run.**

### Release 0: Create a barebones model object with an appropriate data structure 

In `game.js` create a Game model to store the state of our game. Use JavaScript's optional parameters so that we can call the constructor function in two ways:

`game = new Game() // generates a random starting board`

`game = new Game('0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0') // generates a board with the given start`

The latter will come in handy for testing, which U will certainly want to do for this project given the tricky game rules.

Add a `toString()` method to your Game model.

```
> game.toString()
"0000
2020
0000
0000"
```

### Release 1: Build the game logic

The Game model will expose a very simple public interface to the controller.

```
> game.toString()
"0000
2020
0000
0000"
> game.move('left')
> game.toString()
"0000
0004
2000
0000"
> game.move('up')
"2004
0000
0000
0020"
```

Implement the `move` method for all four directions. Think about useful helper methods U might need, such as `spawnBlock` to spawn the new number (This is just a suggestion, I (@alycit) certainly didn't use a method like this.

U might want to setup Jasmine and write specs for model. Or U might want to make a simple `game_test.js` file that includes simple assertions. This game has a variety of interesting edge cases to consider, so make sure U have the logic working correctly.

### Release 2: Integrate the model with the interface via a controller

In your application.js file code to instantiate a new instance of the Game model. Using [Mousetrap](https://github.com/ccampbell/mousetrap) make it so that your keypresses will send `move` commands to the Game. 

In your Game model and controller write methods to update the DOM to display your board. 

### Release 3: Bonuses!

* Implement a score display.
* Implement starting a new game.
* Implement storing the game in LocalStorage so that it still shows up if U close the tab.
