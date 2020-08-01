/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta = parseInt(prompt("Cuantas veces queres repetir ?"));
	if(respuesta > 0){
	do
	{ 
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		contador++;
	}
	while(contador < respuesta)	
	}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/respuesta;

}
/*
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta = "si";
	do
	{ 
		numeroIngresado = parseFloat(prompt("Ingrese un numero: "));
		acumulador = acumulador + numeroIngresado;
		contador++;
		respuesta = prompt("Quiere seguir ingresando numeros? si/no ").toLowerCase();
	}
	while(respuesta == "si")	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

}*/