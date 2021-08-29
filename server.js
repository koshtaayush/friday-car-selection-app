
var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

app.use(compression());
app.use('/status', function (req, res) {
	res.json({
		status: "Friday Car Selection App is up"
	});
});


const DIST_DIR = path.join(__dirname, '/build');
const HTML_FILE = path.join(DIST_DIR, 'index.html');


app.use(express.static(DIST_DIR));


app.get('/*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(3000);
