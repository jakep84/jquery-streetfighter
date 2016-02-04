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
        playHadouken()
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show()
        .animate(
    		{'left': '1300px'},
    		500,
    		function() {
    			$(this).hide();
    			$(this).css('left', '520px');
    		}
            );
  })
    .mouseup(function() {
    	$('.ryu-ready').show();
    	$('.ryu-throwing').hide();

  });
    .keydown(function(){
        $('.ryu-cool').show();
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
    })
});
    function playHadouken () {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play(); 
    }
