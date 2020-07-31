/*
al presionar el botón 
pedir un número entre 0 y 10 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	do{
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	}	
	while (numeroIngresado > 10)
	document.getElementById("txtIdNumero").value = numeroIngresado;

	
}//NO ESTA TERMINADO !!!!! 