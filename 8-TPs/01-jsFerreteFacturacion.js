/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var uno;
var dos;
var tres;
var idPrecioUno;
var idPrecioDos;
var idPrecioTres;

function Sumar () 
{
    var suma;
    
    idPrecioUno = document.getElementById("txtIdPrecioUno").value;
    idPrecioDos = document.getElementById("txtIdPrecioDos").value;
    idPrecioTres = document.getElementById("txtIdPrecioTres").value;
    uno = parseInt(idPrecioUno);    
    dos = parseInt(idPrecioDos);    
    tres = parseInt(idPrecioTres);   
    suma = uno + dos + tres;

    alert(suma);
}
function Promedio () 
{
    var promediar;
    
    idPrecioUno = document.getElementById("txtIdPrecioUno").value;
    idPrecioDos = document.getElementById("txtIdPrecioDos").value;
    idPrecioTres = document.getElementById("txtIdPrecioTres").value;
    uno = parseInt(idPrecioUno);    
    dos = parseInt(idPrecioDos);    
    tres = parseInt(idPrecioTres); 
    promediar = (uno + dos + tres)/3;
    
    alert(promediar);	
}
function PrecioFinal () 
{
    var sumaConIVA;
    
    idPrecioUno = document.getElementById("txtIdPrecioUno").value;
    idPrecioDos = document.getElementById("txtIdPrecioDos").value;
    idPrecioTres = document.getElementById("txtIdPrecioTres").value;
    uno = parseInt(idPrecioUno);    
    dos = parseInt(idPrecioDos);    
    tres = parseInt(idPrecioTres); 
    sumaConIVA = (uno + dos + tres)*1.21;
    
    alert(sumaConIVA);
}