/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	const password = "utn750";
	claveIngresada = prompt("ingrese la clave.");
	while (claveIngresada != password) {
		claveIngresada=prompt("Intente nuevamente");
	}
	alert("Puedes pasar");
}//FIN DE LA FUNCIÓN
