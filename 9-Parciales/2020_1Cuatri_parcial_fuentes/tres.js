/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) Cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	let banderaTemperatura=0;
	let respuesta;
	let edad=0;
	let nombre;
	let sexo;
	let estadoCivil;
	let temperatura=0;
	let personaConMayorTemperatura=0;
	let cantidadMayoresViudos=0;
	let cantidadSolteros=0;
	let cantidadViudos=0;
	let personasMayoresConTemperatura=0;
	let contadorSoltero=0;
	let contadorCasado=0;
	let contadorViudo=0;
	let contadorMujerSoltero=0;
	let contadorMujerCasado=0;
	let contadorMujerViudo=0;
	let contadorHombreSoltero=0;
	let contadorHombreCasado=0;
	let contadorHombreViudo=0
	let contadorHombres=0;
	let contadorMujeres=0;
	let EdadHombresSolteros=0;

	do{
		nombre = prompt("Ingrese el nombre: ");
		edad = parseInt(prompt("Ingrese la edad: "));
		while(edad < 1 || edad > 100){
			edad = parseInt(prompt("Error. Ingrese la edad: "));
		}
		sexo = prompt("Ingrese su sexo f/m").toLowerCase();
		while(!(sexo == "f" || sexo == "m")){
			sexo = prompt("Error. Ingrese su sexo f/m").toLowerCase();
		}
		estadoCivil = prompt("Ingrese su estado civil (soltero, casado, viudo): ").toLowerCase();	
		while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo")){
			estadoCivil = prompt("Error. Ingrese su estado civil (soltero, casado, viudo): ").toLowerCase();	
		}
		if(banderaTemperatura==0){
			banderaTemperatura = parseFloat(prompt("Ingrese su temperatura: "));
			personaConMayorTemperatura = nombre;
		}
		else{
			temperatura = parseFloat(prompt("Ingrese su temperatura: "));
		}
		if(banderaTemperatura < temperatura){
			banderaTemperatura = temperatura;
			personaConMayorTemperatura = nombre;
		}		
		while(temperatura < 36){
			temperatura = parseFloat(prompt("Error. Vuelva a tomar la temperatura: "));
		}
		if(temperatura > 38 && edad >= 60){
			personasMayoresConTemperatura++;
		}
		if(edad >= 60 && estadoCivil == "viudo"){
			cantidadMayoresViudos++;
		}
		switch (sexo) {
			case "f":
				if(estadoCivil == "casado"){
					contadorMujerCasado++;
				}
				else if(estadoCivil == "viudo"){
					contadorMujerViudo++;
				}
				else if(estadoCivil == "soltero"){
					contadorMujerSoltero++;
				}
				contadorMujeres++;
				break;
		
			default:
				if(estadoCivil == "casado"){
					contadorHombreCasado++;
				}
				else if(estadoCivil == "viudo"){
					contadorHombreViudo++;
				}
				else if(estadoCivil == "soltero"){
					contadorHombreSoltero++;					
					EdadHombresSolteros += edad;
				};
				contadorHombres++;
				break;
		}
		respuesta = prompt("Hay mas personas? si/no").toLowerCase();
	}while(respuesta == "si")

document.writeln("a) El nombre de la persona con mas temperatura: " + personaConMayorTemperatura + "<br>");
if(edad >= 60 && estadoCivil == "viudo"){
	document.writeln("b) Mayores de edad viudos: " + cantidadMayoresViudos + "<br>");
}
else if(contadorHombreSoltero < 0){
	document.writeln("c) Cantidad de hombres que hay solteros: " + cantidadSolteros + "<br>");
}
else if(contadorHombreViudo < 0){
	document.writeln("c) Cantidad de hombres que hay viudos: " + contadorHombreViudo + "<br>");
}
else if(personasMayoresConTemperatura > 0){
	document.writeln("d) Personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura: " + personasMayoresConTemperatura + "<br>");
}
document.writeln("f) Promedio de edad entre los hombres solteros: " + (EdadHombresSolteros/contadorHombreSoltero));


}
