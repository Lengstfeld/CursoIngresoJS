/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	sueldo = parseInt(txtIdSueldo.value)
	aumento = sueldo * 1.1
	txtIdResultado.value = aumento 

}
