(function (doc) {

	// Allow :active styles to work in CSS on a page in mobile safari
	doc.addEventListener("touchstart", function(){}, true);

}(document))

(function (doc) {
	var hamburger = doc.getElementById("hamburger-menu");
	var topNav  = doc.getElementById("top-navigation");

	function toggleNav() {
		if (topNav.style.display === 'none' || topNav.style.display === "") {
			topNav.style.display = 'block'
		} else {
			topNav.style.display = 'none'
		}
	}

	// For all major browsers, except IE 8 and earlier
	if (hamburger.addEventListener) {
		hamburger.addEventListener("click", toggleNav);
	}
	// For IE 8 and earlier versions
	else if (hamburger.attachEvent) {
		hamburger.attachEvent("onclick", toggleNav);
	}

}(document))
