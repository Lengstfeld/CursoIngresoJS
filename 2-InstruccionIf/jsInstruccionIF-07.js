function mostrar()
{	
	var estado;
	var edad;
	estado = estadoCivil.value;
	edad = parseInt(txtIdEdad.value);
	if(edad < 18 && estado != "Soltero"){alert('Es muy pequeño para NO ser soltero.');};

}//FIN DE LA FUNCIÓN