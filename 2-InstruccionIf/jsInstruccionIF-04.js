function mostrar()
{
	let idEdad;
	let edad;
	idEdad = document.getElementById("txtIdEdad").value;
	edad = parseInt(idEdad);
	if(edad <= 12){alert("Sos un niñ@");}
	else if(edad >= 13 && edad <= 17 ){alert("Sos adolecente");}
	else{alert("Sos mayor de edad");};

}//FIN DE LA FUNCIÓN