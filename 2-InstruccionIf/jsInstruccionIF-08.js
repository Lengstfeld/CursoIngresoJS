function mostrar()
{
	var estado;
	var edad;
	estado = estadoCivil.value;
	edad = parseInt(txtIdEdad.value);
	if(edad >= 18 && estado == "Soltero"){alert('Es soltero y no es menor.');}
}//FIN DE LA FUNCIÓN