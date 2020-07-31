/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	do{sexoIngresado = prompt("ingrese f ó m.").toLowerCase();}
	while(!(sexoIngresado == "f" || sexoIngresado == "m"))
	if(sexoIngresado == "f"){
		document.getElementById("txtIdSexo").value = "Femenino";}
	else{
		document.getElementById("txtIdSexo").value = "Masculino";}	
}//FIN DE LA FUNCIÓN