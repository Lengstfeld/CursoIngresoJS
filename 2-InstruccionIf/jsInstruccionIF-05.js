function mostrar()
{
	let edad; 
	edad = parseInt(txtIdEdad.value);
	if( edad <= 12){alert("No es adolecente");}
	else if(edad >= 13 && edad <= 17 ){alert("Es adolecente");}
	else{alert("No es adolecente");};
}//FIN DE LA FUNCIÓN