function mostrar()
{
	let idEdad;
	let edad;
	idEdad = document.getElementById("txtIdEdad").value;
	edad = parseInt(idEdad);
	if( edad <= 12 || edad >= 18 ){alert("No es adolecente");}
}//FIN DE LA FUNCIÓN