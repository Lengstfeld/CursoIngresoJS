/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var text = " "
	var x = 0
	while (x <= 10) {
		text += "El siguiente num es " + x + ", ";
		x++
	}
	alert(text);
}//FIN DE LA FUNCIÓN