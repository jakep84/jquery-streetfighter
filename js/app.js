$(document).ready(function() {
        var lookingCool = false;
        var hadouken = false;
	    $('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
    if (! lookingCool ) {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
        }
	})
	.mousedown(function() {
    if (! lookingCool ){
        playHadouken();
        $('.ryu-still').hide();
        $('.ryu-cool').hide();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show()
        .animate(
    		{'left': '1300px'},
    		500,
    		function() {
    			$(this).hide();
    			$(this).css('left', '520px');
    		});
        }
  })
    .mouseup(function() {
    	$('.ryu-ready').show();
    	$('.ryu-throwing').hide();
  });
    $(document).keydown(function(e){
       if (e.keyCode == 88) {
        lookingCool=true;
         $('.ryu-throwing').hide();
         $('.ryu-ready').hide();
         $('.ryu-still').hide();
         $('.ryu-cool').show();
         }
     });
    $(document).keyup(function(e){
       if (e.keyCode == 88) {
        lookingCool=false; 
         $('.ryu-throwing').hide();
         $('.ryu-cool').hide();
         $('.ryu-ready').show();
         $('.ryu-still').hide();
         }
     });

    function playHadouken () {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play(); 
    }
}); 
//<audio id="hadouken-sound" src="sound/hadouken.mp3">
// $(document).ready(function() {
//   $('.ryu').mouseenter(function() {
//     alert('mouse entered .ryu div');
//   });
//});