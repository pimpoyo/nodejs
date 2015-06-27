var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/preguntas', function(req, res) {
	res.send('<html><body>'
			+	'<h1>Preguntas y respuestas</h1>'		
			+	'<form method="post" action="/respuesta">'
			+		'<div>¿Quién descubrió América? <input type="text" name="america"/></div>'
			+		'<div>¿Cuál es la capital de Portugal? <input type="text" name="portugal"/></div>'
			+		'<div><input type="submit" value="Enviar"/></div>'
			+	'</form>'
			+'</body></html>'
	);
});

app.post('/respuesta', function(req, res) {
	// Paso las respuestas a mayúsculas y quito espacios
	var colon = req.body.america.toUpperCase().trim();
	var lisboa = req.body.portugal.toUpperCase().trim();

	// Creo un array con las posibles respuéstas de Colón
	var respuestas = ["CRISTÓBAL COLÓN", "COLÓN", "CRISTOBAL COLON", "COLON"]; 
	
	// Creo una cadena para construir el código html
	var enviar = "";	

	// Comprobación Primera pregunta
	// Compruebo que la respuesta esté en el array
	if (respuestas.indexOf(colon) >= 0) {
		enviar = enviar + "<div>¡¡Muy bien!! " + req.body.america + " es una respuesta correcta</div>";
	} else {
		enviar = enviar + "<div>:-( " + req.body.america  + " no descubrió América</div>";
	}

	// Comprobación Segunda pregunta
	if (lisboa === "LISBOA") {
		enviar = enviar + "<div>¡¡Muy bien!! " + req.body.portugal + " es una respuesta correcta</div>";
	} else {
		enviar = enviar + "<div>:-( " + req.body.portugal  + " no descubrió América</div>";
	}

	// Envío la caden html construída
	res.send(enviar);
});

app.listen(8000);
