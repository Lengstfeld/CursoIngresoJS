function mostrar()
{
	let idEdad;
	let edad;
	idEdad = document.getElementById("txtIdEdad").value;
	edad = parseInt(idEdad);
	if( edad <= 12){alert("No es adolecente");}
	else if(edad >= 13 && edad <= 17 ){alert("Es adolecente");}
	else{alert("No es adolecente");};
}//FIN DE LA FUNCIÓN