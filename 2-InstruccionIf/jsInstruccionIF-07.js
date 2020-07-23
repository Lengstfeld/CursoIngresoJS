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
	if(edad < 18 && estado != "Soltero"){alert('Es muy pequeño para NO ser soltero.');};

}//FIN DE LA FUNCIÓN