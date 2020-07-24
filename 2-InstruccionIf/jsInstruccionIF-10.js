function mostrar()
{
	let numero;
	numero = Math.floor(Math.random() * 10) + 1;
	if(numero < 4) {alert(`Vamos, la proxima se puede ${numero}`);}
	else if(numero > 4 && numero < 9) {alert(`APROBÓ ${numero}`);}
	else {alert(`EXCELENTE ${numero}`);}

}//FIN DE LA FUNCIÓN