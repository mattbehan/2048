$(document).ready(function() {
  const TOTAL_SQUARES = 16, ROW_LENGTH = 4;

  var view = new View();
  console.log(view)
  $('#continue-form').on("submit", function(event) {
    var input = $("#tiles").val()
    event.preventDefault();
  	if( Game.validFormInput( input, TOTAL_SQUARES ) ) {
  		view.removeStartState();
      game = new Game(input)
      console.log(game.board)
      view.renderBoard( game.board, ROW_LENGTH);
  	}
  	else {
  		view.clearForm();
      view.inputErrorMessage();
  	}
  } );

  $("#new-form").on("submit", function(event) {
    event.preventDefault();
    view.removeStartState();
    game = new Game();
    Mousetrap.bind("up", function(){
      game.moveUp();
      view.renderBoard( game.board, ROW_LENGTH);
    } );
    Mousetrap.bind("down", function(){
      game.moveDown();
      view.renderBoard( game.board, ROW_LENGTH);
    } );
    Mousetrap.bind("right", function(){
      game.moveRight();
      view.renderBoard( game.board, ROW_LENGTH);
    } );
    Mousetrap.bind("left", function(){
      game.moveLeft();
      view.renderBoard( game.board, ROW_LENGTH);
    } );
    view.renderBoard(game.board, ROW_LENGTH);
  })

});

