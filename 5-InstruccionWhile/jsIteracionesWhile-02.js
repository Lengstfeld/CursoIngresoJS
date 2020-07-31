/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let text = " ";
	let x = 10;
	while (x >= 0) {
		text +=  x + ", ";
		x--;
	}
	alert(text);
}//FIN DE LA FUNCIÓN