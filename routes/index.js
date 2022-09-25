var express = require('express');
var router = express.Router(); 

var pool = require('../db/database');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	res.render('index', { title: "Alex Perez' HW3" });
	res.render('index', { thing: "This is a test" });
});

module.exports = router;
