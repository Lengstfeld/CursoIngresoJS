/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar()
{
	var n1;
	var n2;
	var id1;
	var id2;
	var resultado;	
	id1 = document.getElementById("txtIdNumeroUno").value;
    id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultado = n1 + n2;	
	alert(`La suma es: ${resultado}`);	
}

function restar()
{
	var n1;
	var n2;
	var id1;
	var id2;
	var resultado;
	id1 = document.getElementById("txtIdNumeroUno").value;
	id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultado = n1 - n2;
	alert(`La resta es: ${resultado}`);
}

function multiplicar()
{
	var n1;
	var n2;
	var id1;
	var id2;
	var resultado;
	id1 = document.getElementById("txtIdNumeroUno").value;
	id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultado = n1 * n2;
	alert(`La multiplicación es: ${resultado}`);
}

function dividir()
{
	var n1;
	var n2;
	var id1;
	var id2;
	var resultado;
	id1 = document.getElementById("txtIdNumeroUno").value;
	id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseFloat(id1);
    n2 = parseFloat(id2);
	resultado = n1 / n2;
	alert(`La división es: ${resultado.toFixed(2)}`);
}

