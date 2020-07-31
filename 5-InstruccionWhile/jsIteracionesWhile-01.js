/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let text = " ";
	let x = 0;
	while (x < 10) {
		x++;
		text += x + ", ";
	}
	alert(text);
}//FIN DE LA FUNCIÓN