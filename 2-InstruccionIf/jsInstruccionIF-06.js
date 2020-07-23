function mostrar()
{
	let idEdad;
	let edad;
	idEdad = document.getElementById("txtIdEdad").value;
	edad = parseInt(idEdad);
	if(edad <= 12){alert("Es un niñ@");}
	else if(edad >= 13 && edad <= 17 ){alert("Es adolecente");}
	else{alert("Es mayor de edad");};

}//FIN DE LA FUNCIÓN