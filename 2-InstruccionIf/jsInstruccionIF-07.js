function mostrar()
{	
	estado = estadoCivil.value
	var edad = parseInt(txtIdEdad.value)
	if(edad < 18 && estado != "Soltero"){alert('Es muy pequeño para NO ser soltero.')}

}//FIN DE LA FUNCIÓN