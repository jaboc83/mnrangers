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

/* Navigate to posts page logic */
(function (getElem, global) {
	var posts = getElem("posts");
	function goToSchedule() {
		global.location.href = "/posts";
	}

	// For all major browsers, except IE 8 and earlier
	if(posts.addEventListener) {
		posts.addEventListener("click", goToSchedule);
	}
	// For IE 8 and earlier versions
	else if (posts.attachEvent) {
		posts.attachEvent("onclick", goToSchedule);
	}

}(document.getElementById.bind(document), window));
