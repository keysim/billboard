// =================================================================
// KeySite =========================================================
// =================================================================
'use strict';
var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var config		= require('./api/config');
var routes		= require('./api/routes');

// =================================================================
// configuration ===================================================
// =================================================================

mongoose.connect(config.db.url, function(err) {
	if(!err)
		return console.log("Connected to MongoDB !");
    console.log("Unable to connect MongoDB.");
    process.exit();
});

app.set('superSecret', config.db.secret);
app.use("/site", express.static(__dirname + '/site'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(morgan('dev'));// Debug mode

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://audrey.lewogona.com');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	next();
});

app.get('/', function(req, res) {
	res.send('The site !');
});

app.use('/api', routes);
app.listen(config.port);

console.log('Server on !');
