/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento10;
	sueldo = parseInt(txtIdSueldo.value);
	aumento10 = sueldo * 1.1;
	txtIdResultado.value = aumento10;
}
