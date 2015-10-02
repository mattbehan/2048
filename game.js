var Game = function(initializer_string) {
  this.positions = (initializer_string || this.getRandomPositions() )
  this.board = nestedFormat(this.positions);
}


Game.prototype.getRandomPositions = function() {
    var gameArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var firstPosition = randPosition()
    gameArray[firstPosition] = 2;
    gameArray = this.spawnBlock(gameArray)
    return gameArray.join();
}

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

// default move upon which other moves are based
Game.prototype.moveLeft = function() {

}

Game.prototype.moveRight = function() {

}

Game.prototype.moveUp = function() {

}

Game.prototype.moveDown = function() {

}

Game.prototype.combineRows = function(nestedArray) {

}

function transpose(array) {
  var newArray = array[0].map(function(col, i) {
  return array.map(function(row) {
    return row[i]
    })
  });
  return newArray
}

function combineLikeValuesInRow(row) {
  var nonZeros = filterNonZeros(row);
  var combined_row = [];
  for ( i = 0; i < nonZeros.length - 1; i++ ) {

    if (nonZeros[i] === nonZeros[i+1]) {
      nonZeros[i] = nonZeros[i] * 2
      nonZeros[i + 1]
    }
  }
  return combined_row;
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

function nestedFormat(positions) {
  array = positions.split(",");
  new_array = []
  while(array.length !==0 ) {
    new_array.push(array.splice(0,4) )
  }
  return new_array
}

game = new Game('2,2,2,2,0,0,0,0,0,0,2,0,2,0,0,0');
console.log(game)

array = nestedFormat(game.positions)
console.log("nested")
console.log(array)
reversed_array = reverseRows( array )
console.log("reversed: ")
console.log(reversed_array)
var transposedArray = game.transpose(reversed_array)
console.log("Transposed Array:");
console.log(transposedArray)
var transformedLeftArray = game.transformLeft(transposedArray)
console.log("Transformed Left Array:");
console.log(transformedLeftArray)
