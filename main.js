var http = require('http');

var app = http.createServer(function(req, res) {
	res.end("HELLO WORLD");
});

console.log("Listening on port 8000");
app.listen(8000, '0.0.0.0');
