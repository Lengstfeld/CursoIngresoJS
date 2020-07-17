/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var id1;
	var id2;
	var n1;
	var n2;
	var result;	
	id1 = document.getElementById("txtIdNumeroUno").value;
	id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
	n2 = parseInt(id2);
	result = n1 + n2;
	alert( `La suma es: ${result}`);
}

