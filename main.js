var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'foo',
  password : 'password',
  database : 'nodeapp'
});

function tryConnect() {
	connection.connect(function(err) {
		if (err !== null) {
			console.log("error connecting to database", err.toString());
			return;
		}

		setup(connection);
		console.log("connected to mysql on port 3306");
	});
}

function setup(connection) {
}


var http = require('http');

var app = http.createServer(function(req, res) {
	res.end("HELLO WORLD");
});

console.log("Listening on port 8000");
app.listen(8000, '0.0.0.0');

// attempt to connect
setTimeout(tryConnect, 8000);
