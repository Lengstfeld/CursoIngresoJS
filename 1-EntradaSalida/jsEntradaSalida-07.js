/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar()
{
	let n1 = parseInt(txtIdNumeroUno.value)
    let n2 = parseInt(txtIdNumeroDos.value)
	var resultSuma = n1 + n2	
	alert(`La suma es: ${resultSuma}`);	
}

function restar()
{
	let n1 = parseInt(txtIdNumeroUno.value)
    let n2 = parseInt(txtIdNumeroDos.value)
	var resultResta = n1 - n2
	alert(`La resta es: ${resultResta}`);
}

function multiplicar()
{ 
	let n1 = parseInt(txtIdNumeroUno.value)
    let n2 = parseInt(txtIdNumeroDos.value)
	var resultMultiplicar = n1 * n2
	alert(`La multiplicación es: ${resultMultiplicar}`);
}

function dividir()
{
	let n1 = parseInt(txtIdNumeroUno.value)
    let n2 = parseInt(txtIdNumeroDos.value)
	var resultDivision = n1 / n2
	alert(`La división es: ${resultDivision}`);
}

