/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
	var num2;
	var result;
	var id1;
	var id2;
	id1 = document.getElementById("txtIdNumeroDividendo").value;
	id2 = document.getElementById("txtIdNumeroDivisor").value;
	num1 = parseInt(id1);
	num2 = parseInt(id2);
	result = num1 % num2;
	alert(`El resto es ${result}`);
}
