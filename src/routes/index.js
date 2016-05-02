var fs = require('fs');
var path = require('path');
var jade = require('jade');
var express = require('express');
var router = express.Router();
var depthChart = require('../data/depthChart');
var staffArray = require('../data/staff');
var playerArray = require('../data/players');
var matchupArray = require('../data/matchups');
var stats = require('../data/stats');
var nearGames = [];
var headlinesPath = path.join(__dirname, '../views/headlines');
var headlines = fs.readdirSync(headlinesPath)
	.map(function (filename) {
		var rgImg = /img\(src=['"]\.\.\/images\/([^\)]+)["']\)/
		var rgTitle = /h1([^\n]+)\n/
		var fullpath = headlinesPath + '/' + filename;
		var content = fs.readFileSync(fullpath).toString();

		return {
			dateNum: filename.split('_')[0],
			date: parseDate(filename.split('_')[0]),
			image: rgImg.exec(content)[1],
			title: rgTitle.exec(content)[1],
			content: jade.render(content)
		};
	})
	.sort()
	.reverse();

function parseDate(date) {
	var rx = /(\d{2})(\d{2})(\d{2})/
	parsedDate = date.match(rx);
	return new Date(2000 + (+parsedDate[1]), (+parsedDate[2])-1, (+parsedDate[3]));
}

for (var i = matchupArray.length - 1; i >= 0; i--) {
	if (matchupArray[i].rangersWon() !== null || i === 0) {
		nearGames.push(matchupArray[i]);
		nearGames.push(matchupArray[i + 1]);
		nearGames.push(matchupArray[i + 2]);
		break;
	}
}

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'MN Rangers Basketball',
		page: 'index',
		matchups: nearGames,
		headlines: headlines.slice(0,2)
	});
});

/* GET about page */
router.get('/about', function(req, res, next) {
	res.render('about', {
		title: 'MN Rangers Basketball About the Team',
		page: 'about'
	});
});

/* GET roster page */
router.get('/roster', function(req, res, next) {
	res.render('roster', {
		title: 'MN Rangers Basketball Team Roster',
		page: 'roster',
		players: playerArray
	});
});

/* GET front office page */
router.get('/frontoffice', function(req, res, next) {
	res.render('frontoffice', {
		title: 'MN Rangers Basketball Front Office',
		page: 'frontoffice',
		staff: staffArray
	});
});

/* GET schedule page */
router.get('/schedule', function(req, res, next) {
	res.render('schedule', {
		title: 'MN Rangers Basketball Game Schedule',
		page: 'schedule',
		matchups: matchupArray
	});
});

/* GET tickets page */
router.get('/tickets', function(req, res, next) {
	res.render('tickets', {
		title: 'MN Rangers Basketball Purchase Tickets',
		page: 'tickets'
	});
});

/* GET venue page */
router.get('/venue', function(req, res, next) {
	res.render('venue', {
		title: 'Oxford Community Center',
		page: 'venue'
	});
});

/* GET broadcast info page */
router.get('/broadcastinfo', function(req, res, next) {
	res.render('broadcastinfo', {
		title: 'MN Rangers Basketball Live Broadcast',
		page: 'broadcastinfo'
	});
});

/* GET headlines page */
router.get('/headlines', function(req, res, next) {
	res.render('headlines', {
		title: 'MN Rangers Basketball Headlines',
		page: 'headlines',
		articles: headlines
	});
});


/* GET community page */
router.get('/community', function(req, res, next) {
	res.render('community', {
		title: 'MN Rangers Basketball Community Relations',
		page: 'community'
	});
});


/* GET contact page */
router.get('/contact', function(req, res, next) {
	res.render('contact', {
		title: 'MN Rangers Basketball Contact Information',
		page: 'contact'
	});
});

/* GET player page */
router.get('/players/:playerId', function(req, res, next) {
	res.render('player', {
		title: 'MN Rangers Basketball Players',
		page: 'player',
		player: playerArray.filter(function (player) {
			return player.id === req.params.playerId;
		})[0]
	});
});

/* GET headline page */
router.get('/headlines/:headlineId', function(req, res, next) {
	res.render('headlines/' + req.params.headlineId, {
		title: 'MN Rangers Basketball News Story',
		page: 'headline'
	});
});

/* GET depth chart page */
router.get('/depth', function(req, res, next) {
	res.render('depth', {
		title: 'MN Rangers Basketball Depth Chart',
		page: 'depth',
		depthChart: depthChart
	});
});

/* GET stats page */
router.get('/stats', function(req, res, next) {
	res.render('stats', {
		title: 'MN Rangers Basketball Stats',
		page: 'stats',
		stats: stats
	});
});
module.exports = router;
