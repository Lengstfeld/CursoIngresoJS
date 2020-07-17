/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
var n1;
var n2;
var id1;
var id2;

function sumar()
{		
	var resultSuma;
	id1 = document.getElementById("txtIdNumeroUno").value;
    id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultSuma = n1 + n2;	
	alert(`La suma es: ${resultSuma}`);	
}

function restar()
{
	var resultResta;
	id1 = document.getElementById("txtIdNumeroUno").value;
	id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultResta = n1 - n2;
	alert(`La resta es: ${resultResta}`);
}

function multiplicar()
{
	var resultMultiplicar;
	id1 = document.getElementById("txtIdNumeroUno").value;
	id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultMultiplicar = n1 * n2;
	alert(`La multiplicación es: ${resultMultiplicar}`);
}

function dividir()
{
	var resultDivision;
	id1 = document.getElementById("txtIdNumeroUno").value;
	id2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(id1);
    n2 = parseInt(id2);
	resultDivision = n1 / n2;
	alert(`La división es: ${resultDivision}`);
}

