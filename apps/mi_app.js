var express = require('express');
var app = express();

app.use(function(req, res, next) {
	app.locals.cont = (app.locals.cont || 0);
	app.locals.cont += 1;

	console.log("Visitas: " + app.locals.cont);
	next();
});

app.get('*', function(req, res){
	res.send('Visita número: ' + app.locals.cont);
});

app.listen(8000);
console.log('Listening on port 8000');
