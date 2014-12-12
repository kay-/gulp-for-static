(function(window) {

'use strict';
// set inner height of viewport
var h = window.innerHeight;
var setVisibility;
var checkResize;

// targetId (string): element to put additional class
// targetClass (string): additional class
// position: position to display
// state: (boolean): whether to keep state after displaying
setVisibility = function(targetId, targetClass, position, state) {


	var elem = document.getElementById(targetId);

	// calculate scroll amount from top
	var y =
		document.documentElement.scrollTop ||
		document.body.scrollTop;

	// set the position of target element
	var bounds = elem.getBoundingClientRect();
	var yPos = Math.round(bounds.top);

	var displayPos = parsePos(position);

	if (yPos < displayPos) {
		elem.classList.add(targetClass);
	} else {

		if (!state) {
			elem.classList.remove(targetClass);
		}
	}

};


function parsePos(position) {
	// var fraction = position.match(/^-?[0-9]+\.[0-9]+$/);
	// var inte = position.match(/^-?[0-9]+$/);

	if (isNaN(position) || position === 0) {
		return 0;
	} else if (position > -1 && position < 1) {
		return h * position;
	} else {
		console.log(position);
		return position;
	}
}

checkResize = function() {
	h = window.innerHeight;
	// console.log(h);
};


var visibl = {
	set: setVisibility,
	chk: checkResize
};

if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(visibl);
	} else {
        // Browser globals
		window.visibl = visibl;
	}

})(window);