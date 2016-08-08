$(document).ready( function() {
	
	// contact buttons
	$('.flipup-button').mouseenter(function() {
		$(this).find('.flipup-box').addClass('slideup');
		$(this).find('.flipup-box').removeClass('slidedown');
	});

	$('.flipup-button').mouseleave(function() {
		$(this).find('.flipup-box').removeClass('slideup');
		$(this).find('.flipup-box').addClass('slidedown');
	});
});