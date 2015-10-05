$(document).ready(function() {
  const TOTAL_SQUARES = 16, ROW_LENGTH = 4;

  var game = new Game();
  var view = new View();
  $('#continue-form').on("submit", function() {
  	console.log($(this).val());
  	console.log($(this))
	if( game.validFormInput( $(this).val() ) ) {
		view.removeStartState();
	}
	else {
		view.clearForm();
	}
  } );

  $("new-game").on("submit", function() {
  	
  })

  // Mousetrap.bind('right',)
});



// function checkInput(TOTAL_SQUARES, game) {
	
// }