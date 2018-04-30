var slider = {};

slider.init = function() {
	slider.container = document.querySelector('.js-slider-list');
	slider.slideImg = document.querySelector('.js-slider-img');
	slider.slideWidth = slider.slideImg.width + 35;

	slider.right = document.querySelector('.js-slider-right');
	slider.left = document.querySelector('.js-slider-left');

	slider.right.addEventListener('click', function() { slider.slide('left') });
	slider.left.addEventListener('click', function() { slider.slide('right') });

}

// Adjusts the slider position.
slider.slide = function(dir) {
	var slideValue = slider.getSlideValue(dir);
	slider.container.style.transform = slideValue;
}

// Calculates how much to scroll the slider based on direction.
slider.getSlideValue = function(dir) {
	var shouldSubtract = dir == 'left',
			currentCSS = slider.container.style.transform,
			value;
	
	// fallback for first slide
	if (currentCSS) {
		currentCSS = slider.container.style.transform.match(/-?\d/g).join('');
	} else {
		slider.container.style.transform = 'translateX(70px)';
		currentCSS = 70;
	}

	if (shouldSubtract) {
		value = currentCSS <= -1190 ? -1190 : ~~currentCSS - slider.slideWidth;
	} else {
		value = ~~currentCSS >= 70 ? 70 : ~~currentCSS + slider.slideWidth;
	}
	
	return 'translateX(' + value + 'px)';
}

document.addEventListener('DOMContentLoaded', slider.init);
