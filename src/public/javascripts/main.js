/* Allow :active styles to work in CSS on a page in mobile safari */
(function (doc) {
	doc.addEventListener("touchstart", function(){}, true);
}(document));

/* Handle hamburger menu hide/show menu */
(function (getElem) {
	var hamburger = getElem("hamburger-menu");
	var topNav  = getElem("top-navigation");

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

}(document.getElementById.bind(document)));

/* Navigate to home page logic */
(function (getElem, global) {
	var headerText = getElem("header-text");
	var logo = getElem("logo");
	function goToHome() {
		global.location.href = "/";
	}

	// For all major browsers, except IE 8 and earlier
	if(headerText.addEventListener) {
		headerText.addEventListener("click", goToHome);
		logo.addEventListener("click", goToHome);
	}
	// For IE 8 and earlier versions
	else if (headerText.attachEvent) {
		headerText.attachEvent("onclick", goToHome);
		logo.attachEvent("onclick", goToHome);
	}

}(document.getElementById.bind(document), window));
