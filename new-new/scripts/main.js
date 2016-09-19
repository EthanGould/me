$(window).scroll( function() {
	if ($(window).scrollTop() > 150) {
		$('.site-header').addClass('minimize');
		return;
	}
	$('.site-header').removeClass('minimize');
});