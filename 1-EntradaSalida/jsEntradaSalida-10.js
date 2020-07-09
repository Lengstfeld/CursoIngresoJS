/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	importe = parseInt(txtIdImporte.value)
	descuento = importe * 0.75
	txtIdResultado.value = descuento 
}
