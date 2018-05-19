var slider = {};

slider.init = function() {
	slider.container = document.querySelector('.js-slider-list');
	slider.slideImg = document.querySelector('.js-slider-img');
	slider.slideWidth = slider.slideImg.width + 35;
	slider.transitionSlides = document.querySelectorAll('.js-transition-slide');
	slider.right = document.querySelector('.js-slider-right');
	slider.left = document.querySelector('.js-slider-left');

	slider.right.addEventListener('click', function() { slider.slide('left') });
	slider.left.addEventListener('click', function() { slider.slide('right') });
	slider.transitionContent();
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
// transition images
slider.transitionContent = function() {
	slider.transitionSlides.forEach(function(slide) {
		var slideImgs = slide.getAttribute('data-src').split(',');
		this.nextSlideIndex = 0;
		// fade first slide before subsequent setTimeout is triggered
		setTimeout(function() {
			slide.classList.add('fade');
		}, 3000);

		// Transition to next image using .fade class
		setInterval(function() {
			slide.classList.remove('fade');
			setTimeout(function() {
				slide.classList.add('fade');
			}, 3000);

			if (this.nextSlideIndex + 1 < slideImgs.length) {
				console.log('mext index', this.nextSlideIndex)
				this.nextSlideIndex = this.nextSlideIndex + 1;
			} else {
				this.nextSlideIndex = 0;
			}
			console.log('next slide', slideImgs[this.nextSlideIndex]);
			slide.src = slideImgs[this.nextSlideIndex];
		}, 3500);
		console.log('slide data', slideImgs);
	});
}

document.addEventListener('DOMContentLoaded', slider.init);
