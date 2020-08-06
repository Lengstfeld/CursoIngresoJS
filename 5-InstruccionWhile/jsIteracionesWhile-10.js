/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let promedioPositivo;
	let promedioNegativo;
	let cantidadCeros;

	respuesta="si";
	numeroIngresado=0;
	sumaNegativos=0;
	sumaPositivos=0;
	promedioNegativo=0;
	promedioPositivo=0;
	cantidadCeros=0;
	cantidadPares=0;
	cantidadImpares=0;

	//comienza el while
	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingresse un numero: "));
		if(numeroIngresado > 0){
			sumaPositivos =+ numeroIngresado;
			promedioPositivo++;
		}
		else if(numeroIngresado < 0){
			sumaNegativos =+ numeroIngresado;
			promedioNegativo++;
		}
		else if(numeroIngresado == 0){
			cantidadCeros++;
		}
		else if(numeroIngresado%2 == 0){
			cantidadPares++;
		}
		else if(numeroIngresado%2 != 0){
			cantidadImpares++;
		}
		respuesta=prompt("Desea continuar? si/no").toLowerCase();
	}//fin del while

	document.write("La suma de positivos es :"+sumaPositivos+"<br>");
	document.write("La suma de negativos es :"+sumaNegativos+"<br><br>");
	document.write("El promedio de positivos es :"+(sumaPositivos/promedioPositivo)+"<br>");
	document.write("El promedio de negativos es :"+(sumaNegativos/promedioNegativo)+"<br><br>");
	document.write("La cantaidad de + ingresados fue de :"+promedioPositivo+"<br>");
	document.write("La cantaidad de - ingresados fue de :"+promedioNegativo+"<br>");
	document.write("La cantaidad de 0 ingresados fue de :"+cantidadCeros+"<br><br>");
	document.write("La cantaidad de numeros pares es :"+cantidadPares+"<br>");
	document.write("La cantaidad de numeros impares es :"+cantidadImpares+"<br><br>");
	document.write("La diferencia entre negativos y positivos es :"+(sumaPositivos-sumaNegativos)+"<br>");

}//FIN DE LA FUNCIÓN