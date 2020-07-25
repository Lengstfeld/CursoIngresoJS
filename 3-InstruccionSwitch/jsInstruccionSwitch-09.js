function mostrar()
{
	let estacionIngresada;
	let destino;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("18000")					
					break;
					case "Cataratas":
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
						case "Cordoba":
					alert("16500")					
					break;
					case "Mar del plata":
					alert("18000")					
					break;		
				default:
					break;
			}	
			break;
		case "Otoño":
			case "Primavera":
			switch (destino) {
					case "Cordoba":
					alert("15000")					
					break;			
				default:
					alert("16500")
					break;
			}	
			break;	
		default:
			break;
	}

}//FIN DE LA FUNCIÓN