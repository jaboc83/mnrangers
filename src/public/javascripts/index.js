/* Navigate to schedule page logic */
(function (getElem, global) {
	var gameTrack = getElem("game-track");
	function goToSchedule() {
		global.location.href = "/schedule";
	}

	// For all major browsers, except IE 8 and earlier
	if(gameTrack.addEventListener) {
		gameTrack.addEventListener("click", goToSchedule);
	}
	// For IE 8 and earlier versions
	else if (gameTrack.attachEvent) {
		gameTrack.attachEvent("onclick", goToSchedule);
	}

}(document.getElementById.bind(document), window));

/* Navigate to headlines page logic */
(function (getElem, global) {
	var headlines = getElem("headlines").getElementsByTagName("article");
	function goToHeadline(href) {
		return function () {
			global.location.href = href;
		}
	}

	for (var i=headlines.length - 1; i >= 0; i--) {
		// For all major browsers, except IE 8 and earlier
		if(headlines[i].addEventListener) {
			headlines[i].addEventListener("click", goToHeadline(headlines[i].getElementsByTagName("a")[0].href));
		}
		// For IE 8 and earlier versions
		else if (headlines[i].attachEvent) {
			headlines[i].attachEvent("onclick", goToHeadline(headlines[i].getElementsByTagName("a")[0].href));
		}
	}

}(document.getElementById.bind(document), window));
