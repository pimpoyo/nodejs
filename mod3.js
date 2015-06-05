// importa módulo file ystem
var fs = require('fs');

if (process.argv.length < 4) {
	console.log('	syntax: "parámetros insuficientes"');
	process.exit();
}

for (var i = 3; i < process.argv.length; i++) {
	fs.readFile( //lectura del fichero i de entrada
		process.argv[i],
		function(err, data) { //callback de finalización
			fs.appendFile(
				process.argv[2], //escritura en fichero de salida
				data,
				function(err) { //callback de finalización
					if(err) throw err; //final de escritura
					console.log('file appended');
				}
			);
		}
	);
}
