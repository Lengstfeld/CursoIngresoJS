function mostrar()
{
	let idEdad;
	let edad;
	idEdad = document.getElementById("txtIdEdad").value;
	edad = parseInt(idEdad);
	if(edad >= 13 && edad <= 17 ){alert("Sos adolecente");}
}//FIN DE LA FUNCIÓN