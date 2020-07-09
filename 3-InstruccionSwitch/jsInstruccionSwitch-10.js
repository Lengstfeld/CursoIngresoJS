function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = txtIdDestino.value;
	
	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("Se viaja");					
					break;
					case "Cataratas":
						case "Mar del plata":
							case "Cordoba":
					alert("No se viaja");					
					break;			
				default:
					break;
			}
			break;
			case "Verano":
			switch (destino) {
				case "Bariloche":
					case "Cordoba":
					alert("No se viaja");					
					break;
					case "Cataratas":
						case "Mar del plata":
					alert("Se viaja");					
					break;			
				default:
					break;
			}
			break;
			case "Otoño":
			switch (destino) {
				case "Bariloche":
					case "Cataratas":
						case "Mar del plata":
							case "Cordoba":
					alert("Se viaja");					
					break;		
				default:
					break;
			}
			break;
			case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert("No se viaja")					
					break;
					case "Cataratas":
						case "Mar del plata":
							case "Cordoba":
					alert("Se viaja");					
					break;		
				default:
					break;
			}
			break;
	}

}//FIN DE LA FUNCIÓN