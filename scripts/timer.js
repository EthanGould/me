var clock = {};

clock.init = function() {
	clock.hourLeft = document.querySelector('.js-hour-left');
	clock.hourRight = document.querySelector('.js-hour-right');
	clock.minuteLeft = document.querySelector('.js-minute-left');
	clock.minuteRight = document.querySelector('.js-minute-right');
	clock.secondLeft = document.querySelector('.js-second-left');
	clock.secondRight = document.querySelector('.js-second-right');
	clock.colors = document.querySelectorAll('.js-clock-color');
	clock.clock = document.querySelector('.js-clock');
	clock.topFade = document.querySelector('.js-top-fade');
	clock.bottomFade = document.querySelector('.js-bottom-fade');

	clock.totalSeconds = 0;
	clock.interval = setInterval(clock.start.bind(clock, 'secondRight', true), 1000);

	clock.eventHandlers();
}

clock.eventHandlers = function() {
	clock.colors.forEach(function(color) {
		color.addEventListener('click', clock.changeColor);
	})
};

clock.changeColor = function() {
	var color = event.target.dataset.color;
	clock.clock.style.background = 'rgba(' + color + ', 0.2)';
	clock.clock.style.boxShadow = '0 0 15px rgb(' + color + ')';
	clock.topFade.style.background = 'linear-gradient( rgb(' + color + '), rgba(' + color + ', 0.1) 90%, transparent)';
	clock.bottomFade.style.background = 'linear-gradient( transparent, rgba(' + color + ', 0.8) 90%, rgb(' + color +'))';
};

clock.stop = function() {
	clearInterval(clock.interval);
};


clock.start = function(slot) {

	clock.updateSlot(slot);
}

clock.setTimer = function() {
	// Get the timer time in seconds.
	clock.timeout = this.value;

	// Resest the clock with the new timer value.
	clock.updateSlot('secondRight');
}

clock.updateSlot = function(slot, increment) {
	clock.totalSeconds = increment ? clock.totalSeconds + 1 : clock.totalSeconds;
	var translateY 	= clock[slot].style.transform;

	// Update the exisiting `translateY()` styling.
	if (translateY.length) {
			translateY = parseInt(translateY.substr(11, translateY.length), 10);
			var max = clock[slot].getAttribute('data-max');

		// Are we on the last number? (9)
		if (translateY > -90 && max > translateY.toString().substr(1, 1)) {
			translateY = translateY - 10 + '%';
		// Reset the slot, update the next one up the chain.
		} else {
			var nextSlot = clock[slot].getAttribute('data-next-slot');
			clock.updateSlot(nextSlot, false);
			translateY = 0;
		}

		// Did we hit the timer amount?
		if (clock.timeout && clock.totalSeconds == clock.timeout) {
			clock.stop();
		}

	// Kick off the first clock cycle.
	} else {
		translateY = '-10%';
	}
	clock[slot].style.transform = 'translateY(' + translateY + ')';
}

document.addEventListener('DOMContentLoaded', clock.init);
