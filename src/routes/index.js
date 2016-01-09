var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'MN Rangers Basketball',
		page: 'index'}
	);
});

/* GET about page */
router.get('/about', function(req, res, next) {
	res.render('about', {
		title: 'MN Rangers Basketball',
		page: 'about'}
	);
});

/* GET schedule page */
router.get('/schedule', function(req, res, next) {
	res.render('schedule', {
		title: 'MN Rangers Basketball',
		page: 'schedule'}
	);
});

/* GET posts page */
router.get('/posts', function(req, res, next) {
	res.render('posts', {
		title: 'MN Rangers Basketball',
		page: 'posts'}
	);
});


/* GET gallery page */
router.get('/gallery', function(req, res, next) {
	res.render('gallery', {
		title: 'MN Rangers Basketball',
		page: 'gallery'}
	);
});


/* GET contact page */
router.get('/contact', function(req, res, next) {
	res.render('contact', {
		title: 'MN Rangers Basketball',
		page: 'contact'}
	);
});


module.exports = router;
