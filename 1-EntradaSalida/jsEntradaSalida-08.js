/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	num1 = parseInt(txtIdNumeroDividendo.value)
	num2 = parseInt(txtIdNumeroDivisor.value)
	result = num1 % num2
	alert(`El resto es ${result}`);
}
