$(window).scroll( function() {
	if ($(window).scrollTop() > 150) {
		$('.site-header').addClass('minimize');
		return;
	}
	$('.site-header').removeClass('minimize');
});

$(document).ready(function() {

	var module = {};

	module.init = function() {
		module.activeClass = 'share-tools--active';
		module.shareTools = document.querySelector('.js-share-tools');
		module.shareToolsBtn = document.querySelector('.js-share-btn');

		module.updateClock();
		module.eventHandlers();
	}

	module.eventHandlers = function() {
		module.shareToolsBtn.addEventListener('mouseenter', module.toggleShareTools);
		module.shareTools.addEventListener('mouseleave', module.toggleShareTools);
	}

	// Share tools JS
	module.toggleShareTools = function() {
		var classList = module.shareTools.classList
		var hoveringFromSelf = event.fromElement == document.querySelector('.js-share-btns > *');
		
		if ( classList.contains(module.activeClass) && !hoveringFromSelf) {
			classList.remove(module.activeClass);
		} else {
			classList.add(module.activeClass);
		}
	}

	// The clock JS
	module.updateClock = function() {
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
		module.updateClock();
	}, 1000);

	module.init();
});

