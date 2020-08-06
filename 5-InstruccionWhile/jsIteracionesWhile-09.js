/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

//Funcion solo While
/*
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	numeroIngresado = 0;
	numeroIngresado = parseInt(prompt("Ingrese un numero: "));
	respuesta = prompt("Quiere seguir ingresando numeros? si/no ").toLowerCase();
	numeroMinimo = numeroIngresado;
	numeroMaximo = numeroIngresado;	
	//inicia el bucle while
	while(respuesta == "si")
	{		
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));		
		if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
		}
		else if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}	
		respuesta = prompt("Quiere seguir ingresando numeros? si/no ").toLowerCase();
	}
	//imprime en los textbox las variables
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN
*/
//Funcion con Do While
function mostrar()
{	//declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero = 0;
	numeroIngresado = 0;
	numeroMinimo = 0;
	numeroMaximo = 0;
	do{
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));		
		if(numeroMaximo > numeroIngresado || banderaDelPrimero == 0){
			numeroMinimo = numeroIngresado;
		}
		if(numeroMinimo < numeroIngresado || banderaDelPrimero == 0){
			numeroMaximo = numeroIngresado;
		}
		banderaDelPrimero++;
		respuesta = prompt("Quiere seguir ingresando numeros? si/no ").toLowerCase();		
	}
	while(respuesta == "si") 
	//imprime en los textbox las variables
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN

