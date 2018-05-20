document.addEventListener('DOMContentLoaded', function() {

	var module = {};

	/**
	 * Initialize the module and set some variables.
	 */
	module.init = function() {
		module.activeClass = 'share-tools--active';
		module.shareTools = document.querySelector('.js-share-tools');
		module.shareToolsBtn = document.querySelector('.js-share-btn');
		module.siteHeader = document.querySelector('.js-site-header');
		module.hamburgerMenu = document.querySelector('.hamburger');
		module.themeToggle = document.querySelector('.js-theme-toggle');
		module.themeList = document.querySelector('.js-theme-list');
		module.themeOption = document.querySelectorAll('.js-theme-item');

		module.updateClock();
		module.eventHandlers();
	}

	/**
	 * Attach event listeners to DOM.
	 */
	module.eventHandlers = function() {
		module.shareToolsBtn.addEventListener('mouseenter', module.showShareTools);
		module.shareTools.addEventListener('mouseleave', module.hideShareTools);
		// module.hamburgerMenu.addEventListener('click', module.toggleHamburger);
		module.themeToggle.addEventListener('click', module.toggleThemes);
		module.themeOption.forEach(function(el) {
			el.addEventListener('click', module.toggleTheme);
		});
		window.addEventListener('scroll', module.scaleHeader);
	}

	/**
	 * Hide the social share tools.
	 */
	module.hideShareTools = function(event) {
		var classList = module.shareTools.classList
		var hoveringFromSelf = event.fromElement == document.querySelector('.js-share-btns > *');
		
		if ( classList.contains(module.activeClass) && !hoveringFromSelf ) {
			classList.remove(module.activeClass);
		}
	}

	/**
	 * Display the social share tools.
	 */
	module.showShareTools = function() {
		var classList = module.shareTools.classList
		classList.add(module.activeClass);
	}

	/**
	 * Update the clock hands every second.
	 */
	module.updateClock = function() {

		setInterval(function() {
			var time = new Date(),
					seconds = (time.getSeconds()/60)*360,
					minutes = (time.getMinutes()/60)*360,
					hour = (time.getHours()/12)*360;

			var secondsHand = document.querySelector('.seconds'),
					minutesHand = document.querySelector('.minutes'),
					hourHand = document.querySelector('.hours');

			if (seconds == 0) {
				secondsHand.style.transition = 'none';
				setTimeout(function() {
					secondsHand.style.transition = 'all 0.1s cubic-bezier(0.42, 0, 0, 2.48)';
				}, 500);
			}

			secondsHand.style.transform = 'rotate(' + seconds + 'deg)';
			minutesHand.style.transform = 'rotate(' + minutes + 'deg)';
			hourHand.style.transform = 'rotate(' + hour + 'deg)';
		}, 1000);
	};

	/**
	 * Toggle state of hamburger menu.
	 */
	module.toggleHamburger = function() {
		document
			.querySelector('.hamburger-menu')
			.classList.toggle('open');
	}

	/**
	 * Toggle the site theme selection panel.
	 */
	module.toggleThemes = function() {
		document.querySelector('.overlay').classList.toggle('fade');
		module.themeList.classList.toggle('visible');
		// loop over each item and apply the fly in class
		module.themeOption.forEach(function(t, i) {
			setTimeout(function() {
				t.classList.toggle('fly-in');
			}, i * 70);
		});
	}

	/**
	 * Toggle the site theme
	 */
	module.toggleTheme = function() {
		var theme = this.dataset.theme;
		document.body.dataset.theme = theme;

		var image = document.querySelector('.js-header-img');
		image.classList.add('hover');
		setTimeout(function() {
			image.classList.remove('hover');
		}, 500);

		module.toggleThemes();
	}

	/**
	 * Scale header elements after scrolling down.
	 */
	module.scaleHeader = function() {
		if ( this.scrollY > 100 ) {
			module.siteHeader.classList.add('minimize');
			return;
		}
		module.siteHeader.classList.remove('minimize');
	}

	module.init();
});

