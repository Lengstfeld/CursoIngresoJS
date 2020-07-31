/*
al presionar el botón 
pedir un número entre 0 y 10 inclusive.*/
function mostrar()
{
	let validacion;
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");	
	validacion = txtIdNumero.value;
	while (numeroIngresado != validacion) {
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");		
	}
	
}//NO ESTA TERMINADO !!!!! 