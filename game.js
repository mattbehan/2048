var Game = function(initializer_string) {
  this.positions = (initializer_string || this.getRandomPositions() )
  this.board = nestedFormat(this.positions, 4);
  this.score = 0;
}

Game.prototype.calculateScore = function() {
  this.score = flatten(this.board, []).reduce(function(a,b){
    return parseInt(a)+parseInt(b)
  }) -4;
}

Game.prototype.getRandomPositions = function() {
    var gameArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var firstPosition = randPosition()
    gameArray[firstPosition] = 2;
    gameArray = this.spawnBlock(gameArray)
    return gameArray.join();
}

// fix
Game.prototype.toString = function() {
  var array = this.positions.split(",")
  var string = ""
  while(array.length !== 0) {
    string += array.splice(0,4).join(",") + "\n";
  }
  return string;
}

Game.prototype.spawnBlock = function(gameArray)  {
  var finished = false
  while (finished !== true) {
    var index = randPosition()
    if (gameArray[index] === 0) {
      console.log(index)
      finished = true;
      gameArray[index] = 2
    }
  }
 return gameArray
}

// we treat each move as the composition of functions, like in geometry. Essentially, we rotate the board to be able to combine the rows, then we rotate the board back. Each rotation is the product of two reflections- a transpostion of the rows and columns (diagonal reflection) and a reversal of the rows (reflection in the vertical plane)
Game.prototype.move = function(transpose, reverse) {
  if(transpose){
    this.board = transpose ( this.board );
  }
  if(reverse){
    this.board = reverseRows(this.board);
  }

  this.undergoMove()

  if(reverse){
    this.board = reverseRows(this.board);
  }
  if(transpose){
    this.board = transpose ( this.board );
  }
}

Game.prototype.undergoMove = function() {
  console.log("moving")
  console.log(this)
  this.board = this.combineRows();
  this.board = flatten(this.board,[])
  this.board = this.spawnBlock(this.board);
  this.board = nestedFormatFromFlat(this.board, 4);
  this.calculateScore();
}

Game.prototype.moveLeft = function() {
  this.move(false, false);
}

Game.prototype.moveRight = function() {
  this.move(false, true);
}

Game.prototype.moveUp = function() {
  this.move(true, false);
}

Game.prototype.moveDown = function() {
  this.move(true, true);
}

Game.prototype.combineRows = function() {
  combinedRows = this.board.map(function(row){
    var nonZeros = filterNonZeros(row);
    for ( i = 0; i < nonZeros.length - 1; i++ ) {

      if (nonZeros[i] === nonZeros[i+1]) {
        nonZeros[i] = nonZeros[i] * 2
        nonZeros.splice(i+1, 1)
      }
    }
    var combined_row = nonZeros
    while (combined_row.length < 4 ) {
      combined_row.push(0);
    }
    return combined_row;
  })
  return combinedRows;
}

function transpose(array) {
  var newArray = array[0].map(function(col, i) {
  return array.map(function(row) {
    return row[i]
    })
  });
  return newArray
}

function reverseRows(array) {
  new_array = []
  for(var i = 0; i < array.length; i ++) {
    new_array.push( array[i].reverse() )
  }
  return new_array
}

function filterNonZeros(row) {
  return row.filter( function(number){
    return number !== 0
  });
}

function randPosition(){
  return Math.floor(Math.random() * 16)
};

function nestedFormat(positions, rowLength) {
  array = positions.split(",").map( function(number){
    return parseInt(number);
  });
  new_array = []
  while(array.length !==0 ) {
    new_array.push(array.splice(0, rowLength) )
  }
  return new_array
}

function nestedFormatFromFlat(array, rowLength) {
  newArray = []
  while (array.length !== 0 ) {
    newArray.push(array.splice(0,4));
  }
  return newArray;
}

// not sure I ever use this
function flatten(nestedArray, initialValue) {
  return nestedArray.reduce(function(a, b) {
    return a.concat(b)
  }, initialValue)
}


game = new Game('2,2,2,2,0,0,0,0,0,0,2,0,2,0,0,0');
console.log(game)


array = nestedFormat(game.positions, 4)
console.log("nested")
console.log(array)
reversed_array = reverseRows( array )
console.log("reversed: ")
console.log(reversed_array)
var transposedArray = transpose(reversed_array)
console.log("Transposed Array:");
console.log(transposedArray)
var transformedLeftArray = game.moveLeft()
console.log("Transformed Left Array:");
console.log(game.board)
var transformedLeftArray = game.moveLeft()
console.log("Transformed Left Array:");
console.log(game.board)
var transformedLeftArray = game.moveLeft()
console.log("Transformed Left Array:");
console.log(game.board)
console.log(game)

