var View = function() {

}

View.prototype.displayStartScreen = function() {
	$("#start-screen")
	console.log("dfdfja;lskfj")
}

View.prototype.removeStartState = function() {
	$("#start-screen").hide()
	$(".overlay").removeClass("overlay")
}

View.prototype.inputErrorMessage = function() {
	if ($("#error").length == 0 ) {
		$("#continue-form").append("<p style='color:red' id='error'>Please be more careful with your input </p>")
	}
}

View.prototype.clearForm = function() {
	$("#continue-form")[0].reset();
}

View.prototype.renderBoard = function(board, rowLength) {
	for ( row = 1; row <= rowLength; row++ ) {
		for ( column = 1; column <= rowLength; column++ ) {
			var cell = $("#row"+row+" .column"+column);
			var value = board[row-1][column-1]
			cell.html(value);
			// cell.css(getColorFromValue( value ) );
		}
	}
}

function getColorFromValue(value){
	switch( value ){
	case 2:
		return {"background-color": "#EEE4DA"}
	case 4:
		return {"background-color": "#EDE0C8"}
	case 8:
		return {"background-color": "#F2B179", "color": "#f9f6f2"}
	case 16:
		return {"background-color":"#F59563", "color": "#f9f6f2"}
	case 32:
		return {"background-color": "#F67C5F", "color": "#f9f6f2"}
	case 64:
		return {"background-color":"#F65E3B", "color": "#f9f6f2"}
	case 128:
		return {"background-color": "#EDCF72", "color": "#f9f6f2","box-shadow": "0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286"}
	case 256:
		return {"color": "#f9f6f2", "background-color":"#edcc61", "box-shadow": "0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048)"}
	case 512:
		return {"color": "#f9f6f2",
    "background": "#edc850",
    "box-shadow": "0 0 30px 10px rgba(243, 215, 116, 0.39683), inset 0 0 0 1px rgba(255, 255, 255, 0.2381)"};
	case 1024:
		return {"color": "#f9f6f2",
    "background": "#edc53f",
    "box-shadow": "0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571)"};
	case 2048:
		return {"color": "#f9f6f2",
    "background": "#edc22e",
    "box-shadow": "0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333)"};
}
}