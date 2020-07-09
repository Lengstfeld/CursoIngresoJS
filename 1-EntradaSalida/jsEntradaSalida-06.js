/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var n1 = parseInt(txtIdNumeroUno.value)
	var n2 = parseInt(txtIdNumeroDos.value)
	var result = n1 + n2
	alert( `La suma es: ${result}`);
}

