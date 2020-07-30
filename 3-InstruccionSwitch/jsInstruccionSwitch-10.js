function mostrar() {
	let estacionIngresada;
	let destino;
	let viaja;
	let noViaja;
	
	viaja = alert("Se viaja");
	noViaja = alert("No se viaja");
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	

	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					viaja;
					break;
				default:
					noViaja;
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
				case "Cordoba":
					noViaja;
					break;
				default:
					viaja;
					break;
			}
			break;
		case "Otoño":
			switch (destino) {
				default:
					viaja;
					break;
			}
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					noViaja;
					break;
				default:
					viaja;
					break;
			}
			break;
	}

} //FIN DE LA FUNCIÓN