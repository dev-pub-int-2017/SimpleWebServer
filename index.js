var express = require('express');
var app = express();

var mustache = require('mustache-express');
app.engine('html', mustache());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/assets', express.static('assets'));

var hello_data = {
	my_name : "harlo",
	my_favorite_color : "yellow",
	my_picture : "harlo.png"
};

app.get('/', function(req, res) {
	res.render("index.html", hello_data);
});

app.post('/', function(req, res) {
	res.render("index.html", hello_data);
});

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Simple Server Started at http://%s:%s", host, port);
});
