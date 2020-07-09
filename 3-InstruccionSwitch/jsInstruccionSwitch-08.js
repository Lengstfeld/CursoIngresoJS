function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado) {
		case "Bariloche":
			alert("Frio");
			break;
		case "Cataratas":
			alert("Calor")			
			break;
		case "Mar del plata":
			alert("Calor")
			break;
		case "Ushuaia":
			alert("Frio")
			break;	
		default:
			break;
	}

}//FIN DE LA FUNCIÓN