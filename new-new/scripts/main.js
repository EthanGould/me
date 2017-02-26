$(window).scroll( function() {
	if ($(window).scrollTop() > 150) {
		$('.site-header').addClass('minimize');
		return;
	}
	$('.site-header').removeClass('minimize');
});

var updateTime = function() {
	var time, seconds, minutes, hour;
	time = new Date();
	seconds = (time.getSeconds()/60)*360;
	minutes = (time.getMinutes()/60)*360;
	hour = (time.getHours()/12)*360;

	var secondsHand = document.querySelector('.clock-arm.seconds');
	var minutesHand = document.querySelector('.clock-arm.minutes');
	var hourHand = document.querySelector('.clock-arm.hours');

	secondsHand.style.transform = 'rotate(' + seconds + 'deg)';
	minutesHand.style.transform = 'rotate(' + minutes + 'deg)';
	hourHand.style.transform = 'rotate(' + hour + 'deg)';
};

setInterval(function() {
	updateTime();
}, 1000);