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

	// spinning profile picture
	$('.site-header__img').mouseover(function() {
		var $this = $(this);
		$this.addClass('spin');
		setTimeout(function() {
			$this.removeClass('spin');
		}, 500);
	});

});