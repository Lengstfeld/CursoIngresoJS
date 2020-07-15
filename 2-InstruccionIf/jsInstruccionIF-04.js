function mostrar()
{
	var edad;
	edad = parseInt(txtIdEdad.value);
	if(edad <= 12){alert("Sos un niñ@");}
	else if(edad >= 13 && edad <= 17 ){alert("Sos adolecente");}
	else{alert("Sos mayor de edad");};

}//FIN DE LA FUNCIÓN