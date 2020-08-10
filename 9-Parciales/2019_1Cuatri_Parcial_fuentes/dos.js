function mostrar()
{
    let nombre1;
    let nombre2;
    let kilos1=0;
    let kilos2=0;
    let sumaKilos=0;
    let promedioPeso=0;

    nombre1 = prompt("Ingrese nombre");
    nombre2 = prompt("Ingrese nombre de su pareja");
    kilos1 = parseFloat(prompt("Ingrese su peso: "));
    kilos2 = parseFloat(prompt("Ingrese el peso de su pareja: "));
    sumaKilos = kilos1 + kilos2;
    promedioPeso = sumaKilos / 2;


    alert("ustedes se llaman " +nombre1 +" y " +nombre2 + " pesan " + kilos1+ " y "+ kilos2+" kilos");
    alert("que sumados son "+ sumaKilos +" kilos");
    alert("y el promedio de peso "+ promedioPeso);
}
