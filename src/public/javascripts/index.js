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
