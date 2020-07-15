/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var uno;
    var dos;
    var tres;
    var suma;
    
    uno = parseInt(txtIdPrecioUno.value)    
    dos = parseInt(txtIdPrecioDos.value)    
    tres = parseInt(txtIdPrecioTres.value)    
    suma = uno + dos + tres;

    alert(suma);
}
function Promedio () 
{
    var uno;
    var dos;
    var tres;
    var promediar;
    
    uno = parseInt(txtIdPrecioUno.value);
    dos = parseInt(txtIdPrecioDos.value);
    tres = parseInt(txtIdPrecioTres.value);
    promediar = (uno + dos + tres)/3;
    
    alert(promediar);	
}
function PrecioFinal () 
{
    var uno;
    var dos;
    var tres;
    var sumaConIVA;
    
    uno = parseInt(txtIdPrecioUno.value)
    dos = parseInt(txtIdPrecioDos.value)
    tres = parseInt(txtIdPrecioTres.value)
    sumaConIVA = (uno + dos + tres)*1.21;
    
    alert(sumaConIVA);
}