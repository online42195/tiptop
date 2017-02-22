//START EMAIL FORM
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change selektor form
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change put k php
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Ваша заявка принята.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
//END EMAIL FORM

function show_feedback_result( message, color ){
	$( ".bwrapper" ).toggle();
	$( ".feedback_result" ).show();
	$( ".feedback_result div" ).css( "color", color ).html( message );
}

var curr_step = 1;
var interval = 3000;

var next_step = function(){
	if( 12 === curr_step ){
		curr_step = 1;
	}
	$( ".steps-hover" ).removeClass( "steps-hover" );
	$( ".step" + curr_step ).addClass( "steps-hover" );
	curr_step++;
}

$(document).ready(function(){
	
	$( ".s-bg, .close-b" ).click(
		function(){ 
			$( ".s-bg" ).hide();
			$( ".step" ).hide();
			return false;
		}
	);
	
	var timeout = setInterval( function(){ next_step() }, interval );
	$( ".steps" ).click(
		function(){
			$( ".s-bg" ).show();
			var id = $(this).attr( "class" ).replace( /\D+/g,"" );
			$( ".step-" + id ).show();
			return false;
		}
	).hover(
		function(){
			$( ".steps-hover" ).removeClass( "steps-hover" );
			$(this).addClass( "steps-hover" );
			clearTimeout( timeout );
		}, function(){
			$(this).removeClass( "steps-hover" );
			timeout = setInterval( function(){ next_step() }, interval );
		}
	);
		
});
