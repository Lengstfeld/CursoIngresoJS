function mostrar()
{
	var idEdad;
	var edad;
	idEdad = document.getElementById("txtIdEdad").value;
	edad = parseInt(idEdad);
	if(edad < 18){alert("Sos menor de edad");}
	else{alert("Sos mayor de edad");}

}//FIN DE LA FUNCIÓN