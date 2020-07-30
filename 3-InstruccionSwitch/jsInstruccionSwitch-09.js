function mostrar() {
	
	const estadiaInicial = 15000;
	let estacionIngresada;
	let destino;
	let aumento20;
	let aumento10;
	let descuento20;
	let descuento10;
	aumento10 = estadiaInicial * 1.1;
	aumento20 = estadiaInicial * 1.2;
	descuento10 = estadiaInicial * 0.9;
	descuento20 = estadiaInicial * 0.8;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	
	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert(aumento20)
					break;
				case "Cordoba":
					alert(descuento20)
					break;
				default:
					alert(descuento10)
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					alert(descuento20)
					break;
				case "Mar del plata":
					alert(aumento20)
					break;
				default:
					alert(descuento10)
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Cordoba":
					alert(estadiaInicial)
					break;
				default:
					alert(aumento20)
					break;
			}
			break;
		default:
			break;
	}

} //FIN DE LA FUNCIÓN