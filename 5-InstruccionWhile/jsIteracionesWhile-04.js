/*
al presionar el botón 
pedir un número entre 0 y 10 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");	
	var validacion = txtIdNumero.value;
	while (numeroIngresado != validacion) {
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");		
	}
	
}//NO ESTA TERMINADO !!!!! 