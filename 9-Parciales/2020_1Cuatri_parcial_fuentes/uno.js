
/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/ 

function mostrar()
{
	let producto;
	let precio;
	let unidades;
	let fabricante;
	let banderaAlcohol;
	let unidadesAlcohol;
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let fabricanteAlcohol;
	let promedio;
	let mayorProducto;

	promedio=0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	vMinAlcohol=0;
	banderaAlcohol=0;
	unidadesJabon=0;
	unidadesAlcohol=0;
	unidades=0;
	precio=0;

for (let i = 0; i < 5; i++) {
	
	producto = prompt("Ingrese un producto: ");	
	while(!(producto == "barbijo" || producto == "jabon" || producto == "alcohol")){
		producto = prompt("Error. Ingrese un producto: ");
	}

	precio = parseFloat(prompt("Ingrese el precio entre $100 y $300: "));	
	while(precio < 100 || precio > 300){
		precio = parseFloat(prompt("Error entre $100 y $300: "));
	}

	unidades = parseInt(prompt("Ingrese la cantidad de unidades(entre 1 a 1000): "));
	while(unidades < 1 || unidades > 1000){
		unidades = parseInt(prompt("Error entre 1 a 1000: "));
	}

	marca = prompt("Ingresar marca: ");
	fabricante = prompt("Ingresar fabricante: ");

	switch (producto) {
		case "alcohol":
			acumuladorAlcohol += unidades;
			contadorAlcohol++;
			if(banderaAlcohol == 0 || precio<vMinAlcohol){
				banderaAlcohol=1;
				vMinAlcohol=precio;
				unidadesAlcohol=unidades;
				fabricanteAlcohol=fabricante;
			} 
			break;
		case "barbijo":
			acumuladorBarbijo += unidades;
			contadorBarbijo++;
			break;	
		default:
			acumuladorJabon += unidades;
			contadorJabon++;
			break;
	}
	
}
if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon  ){
	mayorProducto="Alcohol";
	promedio = acumuladorAlcohol / contadorAlcohol;

}else if(acumuladorBarbijo >= acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon  ){
	mayorProducto="Barbijo";
	promedio = acumuladorBarbijo / contadorBarbijo;
}else{
	mayorProducto="Jabon";
	promedio = acumuladorJabon / contadorJabon;
}
if(banderaAlcohol==1){
	document.writeln(`a) El alcohol mas barato es de $ ${vMinAlcohol}, hay ${unidadesAlcohol} unidades, y son del fabricante ${fabricanteAlcohol}.<br><br>`);
}
document.writeln(`b) El producto con mayor unidades es ${mayorProducto} y el promedio de compra de este es de ${promedio}. <br><br>`);
if(acumuladorJabon != 0){
	document.writeln(`c) El total de unidades de jabones es de ${acumuladorJabon}. <br><br>`);
}
}
