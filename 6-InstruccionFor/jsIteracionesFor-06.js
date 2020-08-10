function mostrar()
{ 
	let num ;
	let cont=0;
	num = parseInt(prompt("Ingrese un numero: "));

	for (let i=1 ; i <= num ; i++) {
		
		if(i % 2 == 0){
			alert(i);
			cont++;
		}
	}
	alert("Se encontraron " + cont + " numeros pares" )



}//FIN DE LA FUNCIÓN