var express = require('express');
var router = express.Router(); 

var pool = require('../db/database');
var client = require('../db/database');

/* GET home page. */

version = ''
client.connect()
client.query('SELECT VERSION();', (err, res) => {
	client.end();
	version =  res.rows;
	console.log(version);
})

router.get('/', function(req, res, next) {
	//console.log(version);
	res.render('index', { title: "Alex Perez' HW3", version: version[0].version});
});

module.exports = router;
