function mostrar()
{
	let idEdad;
	let idEstado;
	let estado;
	let edad;
	idEdad = document.getElementById("txtIdEdad").value
	idEstado = document.getElementById("estadoCivil").value
	estado = idEstado;
	edad = parseInt(idEdad);
	if(edad >= 18 && estado == "Soltero"){alert('Es soltero y no es menor.');}
}//FIN DE LA FUNCIÓN