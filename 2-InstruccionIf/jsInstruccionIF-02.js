function mostrar()
{
	let idEdad;
	let edad;
	idEdad = document.getElementById("txtIdEdad").value;
	edad = parseInt(idEdad);
	if(edad >= 18){alert("Sos mayor de edad");}
}//FIN DE LA FUNCIÓN