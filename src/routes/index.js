var express = require('express');
var router = express.Router();
var staffArray = require('../data/staff.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'MN Rangers Basketball',
		page: 'index'
	});
});

/* GET about page */
router.get('/about', function(req, res, next) {
	res.render('about', {
		title: 'MN Rangers Basketball',
		page: 'about',
		staff: staffArray
	});
});

/* GET schedule page */
router.get('/schedule', function(req, res, next) {
	res.render('schedule', {
		title: 'MN Rangers Basketball',
		page: 'schedule'
	});
});

/* GET headlines page */
router.get('/headlines', function(req, res, next) {
	res.render('headlines', {
		title: 'MN Rangers Basketball',
		page: 'headlines'
	});
});


/* GET community page */
router.get('/community', function(req, res, next) {
	res.render('community', {
		title: 'MN Rangers Basketball',
		page: 'community'
	});
});


/* GET contact page */
router.get('/contact', function(req, res, next) {
	res.render('contact', {
		title: 'MN Rangers Basketball',
		page: 'contact'
	});
});


module.exports = router;
