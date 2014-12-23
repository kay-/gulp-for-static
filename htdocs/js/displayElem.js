(function(window) {

'use strict';
	// set inner height of viewport
	var h = window.innerHeight;

	var displayOne;
	var displayMulti;
	var checkResize;

	// targetId (string): element to put additional class
	// targetClass (string): additional class
	// position: position to display
	// continuity: (boolean): whether to keep continuity after displaying
	displayOne = function(targetId, targetClass, position, continuity) {


		var elem = document.getElementById(targetId);

		// set the position of target element and calculate the distance
		var targetElemPosition = elem.getBoundingClientRect().top;
		var targetElemPositionY = Math.round(targetElemPosition);

		// set the position to be displayed within viewport
		var viewedPosition = parsePosition(position);

		if (targetElemPositionY <= viewedPosition) {
			elem.classList.add(targetClass);
		} else {

			if (!continuity) {
				elem.classList.remove(targetClass);
			}
		}

	};

	displayMulti = function(targetId, targetClass1, targetClass2, position, continuity) {

		var elem = document.getElementById(targetId);
		var classElem1 = document.getElementsByClassName(targetClass1);

		// set the position of target element and calculate the distance
		var targetElemPosition = elem.getBoundingClientRect().top;
		var targetElemPositionY = Math.round(targetElemPosition);

		// set the position to be displayed within viewport
		var viewedPosition = parsePosition(position);

		if (targetElemPositionY <= viewedPosition) {

			for (var i = 0; i < classElem1.length; i++) {
				classElem1[i].classList.add(targetClass2);
			}
			//classElem1[0].classList.add(targetClass2);
		} else {

			if (!continuity) {

				for (var j = 0; j < classElem1.length; j++) {
				classElem1[j].classList.remove(targetClass2);
				}
			}
		}
	};


	function parsePosition(position) {

		if (isNaN(position) || position === 0) {
			return 0;
		} else if (position > -1 && position < 1) {
			return h * position;
		} else {
			return position;
		}
	}

	checkResize = function() {
		h = window.innerHeight;
	};


	var display = {
		setOne: displayOne,
		setMulti: displayMulti,
		chk: checkResize
	};

	if (typeof define === 'function' && define.amd) {
			// AMD. Register as an anonymous module.
			define(display);
		} else {
			// Browser globals
			window.display = display;
		}

})(window);