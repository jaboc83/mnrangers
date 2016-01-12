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
	var headlines = getElem("headlines");
	function goToSchedule() {
		global.location.href = "/headlines";
	}

	// For all major browsers, except IE 8 and earlier
	if(headlines.addEventListener) {
		headlines.addEventListener("click", goToSchedule);
	}
	// For IE 8 and earlier versions
	else if (headlines.attachEvent) {
		headlines.attachEvent("onclick", goToSchedule);
	}

}(document.getElementById.bind(document), window));
