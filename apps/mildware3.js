var express = require('express');
var app = express();

app.get('/user/:id', function(req, res, next) {
	if (req.params.id === "Ana" || req.params.id === "Eva") {
		res.send('Usuario del sistema');
	} else {
		next(new Error('Usuario desconocido'));
	}
});

app.get('*', function(req, res) {
	res.send('Operación inválida');
});

app.use(function(err, req, res, next) {
	res.send(err.toString());
});

app.listen(8000);
console.log('Listening on port 8000');
