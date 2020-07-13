/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var uno = parseInt(txtIdPrecioUno.value)
    var dos = parseInt(txtIdPrecioDos.value)
    var tres = parseInt(txtIdPrecioTres.value)
    var suma = uno + dos + tres;
    alert(suma)
}
function Promedio () 
{
    var uno = parseInt(txtIdPrecioUno.value)
    var dos = parseInt(txtIdPrecioDos.value)
    var tres = parseInt(txtIdPrecioTres.value)
    var promediar = (uno + dos + tres)/3;
    alert(promediar)
	
}
function PrecioFinal () 
{
    var uno = parseInt(txtIdPrecioUno.value)
    var dos = parseInt(txtIdPrecioDos.value)
    var tres = parseInt(txtIdPrecioTres.value)
	var sumaConIVA = (uno + dos + tres)*1.21;
    alert(sumaConIVA)
}