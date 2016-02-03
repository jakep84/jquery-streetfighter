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
    	$('.hadouken').show().animate(
    		{'left': '1020px'},
    		500,
    		function() {
    			$(this).hide();
    			$(this).css('left', '520px');
    		});
    // play hadouken sound
    // animate hadouken to the right of the screen
  })
    .mouseup(function() {
    	$('.ryu-ready').show();
    	$('.ryu-throwing').hide();

  });
});