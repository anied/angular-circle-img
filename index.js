var express = require('express');
var fs = require('fs');
var colors = require('colors');

var config = JSON.parse(fs.readFileSync(__dirname+'/config/settings.js'));
var single_page_app = express();

var webroot = __dirname+'/'+config.webroot;
var approot = webroot + '/' + config.approot;

single_page_app.use(express.static(webroot));

//Based on solution at:
//https://ninja.sg/spa-router-fallback/
single_page_app.get('*',function (req, res, next) {
	if (req.accepts('html')) {
		console.log(('Redirecting request ').yellow + (req.url).magenta + (' to approot').yellow);
		res.sendFile(approot);
	} else {
		next();
	}
});

single_page_app.listen(config.port, function () {
	console.log(('* * *  ').red+('YOU ARE RUNNING THE ANGULAR_CIRCLE_IMG DEVELOPMENT ENVIRONMENT').green+('  * * *').red);
	// console.log(''); // Is it the smartest way to do a newline?  No.  But it's easier to parse visually than a '\n' at the end of every line where I want it
	console.log(('(Based on https://github.com/anied/stupid_simple_node_single_page_app_project_shell)').grey);
	console.log(''); // Is it the smartest way to do a newline?  No.  But it's easier to parse visually than a '\n' at the end of every line where I want it
	console.log(('Express running on port ').green + (config.port.toString()).yellow);
	console.log(''); // Is it the smartest way to do a newline?  No.  But it's easier to parse visually than a '\n' at the end of every line where I want it
	console.log(('Your application webroot (the directory where static files are served from) is:').green);
	console.log((webroot).magenta);
	console.log(''); // Is it the smartest way to do a newline?  No.  But it's easier to parse visually than a '\n' at the end of every line where I want it
	console.log(('Your approot (the html file that all non-template paths will be redirected back to) is:').green);
	console.log((approot).magenta);
	console.log(''); // Is it the smartest way to do a newline?  No.  But it's easier to parse visually than a '\n' at the end of every line where I want it
});