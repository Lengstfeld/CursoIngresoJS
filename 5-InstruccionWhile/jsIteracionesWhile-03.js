/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	pass = "utn750"
	while (claveIngresada != pass) {
		claveIngresada=prompt("Intente nuevamente")
	}
	alert("Puedes pasar")
}//FIN DE LA FUNCIÓN
