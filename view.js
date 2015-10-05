var View = function() {

}

View.prototype.displayStartScreen = function() {
	$("#start-screen")
}

View.prototype.removeStartState = function() {
	$("#start-screen").hide()
	$(".overlay").removeClass("overlay")
}

View.prototype.hideStartScreen = function() {

}

View.prototype.hideStartScreen = function() {

}

View.prototype.clearForm = function() {
	$("#start-screen")[0].reset();
}