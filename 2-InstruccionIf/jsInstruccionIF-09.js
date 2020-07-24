//Genero el número RANDOM entre 1 y 10 
function mostrar()
{
	let maximo;
	let minimo;
	let numero;
	maximo = 10;
	minimo = 1;
	//numero = Math.floor(Math.random() * 10) + 1;
	numero = Math.round(Math.random() * (maximo - minimo) + minimo)
	alert(numero);	

}//FIN DE LA FUNCIÓN