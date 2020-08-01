/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
/*
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1; // Porque es el neutro de la Multiplicacion.
	respuesta="si";	
	
	while(respuesta == "si")
	{ 
		numeroIngresado = parseFloat(prompt("Ingrese un numero: "));		
		if(numeroIngresado >= 0){
			sumaPositivos = sumaPositivos + numeroIngresado;
		}else {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuesta = prompt("Quiere seguir ingresando numeros? si/no ").toLowerCase();
	}			
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}//FIN DE LA FUNCIÓN
*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let contador;
	let negativo;
	negativo = 0;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1; // Porque es el neutro de la Multiplicacion.

	respuesta = parseInt(prompt("Cuantos numeros queres ingresar?"));
	while(contador < respuesta && respuesta > 0 )
	{ 
		numeroIngresado = parseFloat(prompt("Ingrese un numero: "));		
		if(numeroIngresado >= 0){
			sumaPositivos = sumaPositivos + numeroIngresado;
		}else {
			negativo = multiplicacionNegativos * numeroIngresado;
		}
		contador++;
	}  				
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = negativo;
}//FIN DE LA FUNCIÓN