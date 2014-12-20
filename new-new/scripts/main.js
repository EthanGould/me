$(document).ready(function() {
	console.log('scripts running');

	$('.link-to-me').hover(function(){
		$(this).css('background', '#10a7ed');
	}, function() {
		$(this).css('background', '#55c7fc');
	});

	$('.profile-pic').hover(function() {
		$(this).css('border', '1px solid lightgrey');
	}, function() {
		$(this).css('border', '1px solid black');
	});
});