/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
var n1;
var n2;
var id1;
var id2;
var resultado;

function sumar()
{
	id1 = document.getElementById("txtIdNumeroUno").value;
    id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultado = n1 + n2;	
	alert(`La suma es: ${resultado}`);	
}

function restar()
{
	id1 = document.getElementById("txtIdNumeroUno").value;
	id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultado = n1 - n2;
	alert(`La resta es: ${resultado}`);
}

function multiplicar()
{
	id1 = document.getElementById("txtIdNumeroUno").value;
	id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultado = n1 * n2;
	alert(`La multiplicación es: ${resultado}`);
}

function dividir()
{
	id1 = document.getElementById("txtIdNumeroUno").value;
	id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultado = n1 / n2;
	alert(`La división es: ${resultado}`);
}

