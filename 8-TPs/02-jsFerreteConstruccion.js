/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseInt(txtIdLargo.value);
    var ancho = parseInt(txtIdAncho.value);
    var radio = parseInt(txtIdRadio.value);

    var sumar = ((largo + ancho)* 2 )* 3;
    alert(`Se necesita ${sumar}m. de alambre`)

}
function Circulo () 
{
    var largo = parseInt(txtIdLargo.value);
    var ancho = parseInt(txtIdAncho.value);
    var radio = parseInt(txtIdRadio.value);
    var pi = 3.14;

    var areaCirculo = ((radio * radio)*pi) *3;
    alert(`Se necesita ${areaCirculo}m. de alambre`)
	
}
function Materiales () 
{
    var largo = parseInt(txtIdLargo.value);
    var ancho = parseInt(txtIdAncho.value);
    var radio = parseInt(txtIdRadio.value);
    var cemento = (largo * ancho) * 2
    var cal = (largo * ancho) * 3
    
    alert(`Se necesita ${cemento} bolsas de cemento y ${cal} de cal`)
}