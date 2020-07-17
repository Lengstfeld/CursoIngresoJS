/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento25;
	var idImporte;
	idImporte = document.getElementById("txtIdImporte").value;
	importe = parseInt(idImporte);
	descuento25 = importe * 0.75;
	txtIdResultado.value = descuento25;
}
