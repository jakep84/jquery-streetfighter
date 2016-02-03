$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').show();
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
  })
    .mouseup(function() {
    	$('.ryu-ready').show();
    	$('.ryu-throwing').hide();
  });
});