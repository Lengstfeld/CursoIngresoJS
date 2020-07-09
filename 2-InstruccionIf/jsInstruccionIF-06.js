function mostrar()
{
	let edad = parseInt(txtIdEdad.value)
	if(edad <= 12){alert("Es un niñ@")}
	else if(edad >= 13 && edad <= 17 ){alert("Es adolecente")}
	else{alert("Es mayor de edad")};

}//FIN DE LA FUNCIÓN