$(window).scroll( function() {
	if ($(window).scrollTop() > 150) {
		$('.site-header').addClass('minimize');
		return;
	}
	$('.site-header').removeClass('minimize');
});


// The clock JS
var updateTime = function() {
	var time = new Date(),
			seconds = (time.getSeconds()/60)*360,
			minutes = (time.getMinutes()/60)*360,
			hour = (time.getHours()/12)*360;

	var secondsHand = document.querySelector('.seconds'),
			minutesHand = document.querySelector('.minutes'),
			hourHand = document.querySelector('.hours');

	secondsHand.style.transform = 'rotate(' + seconds + 'deg)';
	minutesHand.style.transform = 'rotate(' + minutes + 'deg)';
	hourHand.style.transform = 'rotate(' + hour + 'deg)';
};

setInterval(function() {
	updateTime();
}, 1000);