function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = txtIdDestino.value;
	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("18000")					
					break;
					case "Cataratas":
					alert("13500")					
					break;
					case "Mar del plata":
					alert("13500")					
					break;
					case "Cordoba":
					alert("12000")					
					break;			
				default:
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					alert("12000")					
					break;
					case "Cataratas":
					alert("16500")					
					break;
					case "Mar del plata":
					alert("18000")					
					break;
					case "Cordoba":
					alert("16500")					
					break;			
				default:
					break;
			}	
			break;
		case "Otoño":
			case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert("16500")					
					break;
					case "Cataratas":
					alert("16500")					
					break;
					case "Mar del plata":
					alert("16500")					
					break;
					case "Cordoba":
					alert("15000")					
					break;			
				default:
					break;
			}	
			break;	
		default:
			break;
	}

}//FIN DE LA FUNCIÓN