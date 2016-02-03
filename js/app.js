$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	});
	$('.ryu').mousedown(function() {
		$('.ryu-throwing').show();
		$('.ryu-ready').hide();
	});
	$('.ryu').mouseup(function() {
		$('ryu-ready').show();
		$('ryu-throwing').hide();
	});
});