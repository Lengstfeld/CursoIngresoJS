/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  let banderaPrimaria=0;
  let productosConstruccion;
  let acumuladorArena=0;
  let acumuladorCal=0;
  let acumuladorCemento=0;
  let cantidadBolsas=0;
  let precioPorBolsa=0;
  let respuesta;
  let descuento=0;
  let brutoSinDescuento=0;
  let totalAPagar=0;
  let totalAPagarConDescuento=0;
  let totalAPagarSinDescuento=0;
  let productoConMasBolsas;
  let ProductoMasCaro;
  let TotalArena=0;
  let TotalCal=0;
  let TotalCemento=0;
  let contadorArena=0;
  let contadorCal=0;
  let contadorCemento=0;

  do{
    productosConstruccion = prompt("Ingrese el producto (arena, cal, cemento): ").toLowerCase();
    while(!(productosConstruccion == "arena" || productosConstruccion == "cal" || productosConstruccion == "cemento" )){
      productosConstruccion = prompt("Error. Ingrese el producto (arena, cal, cemento): ").toLowerCase();
    }

    cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas: "));
    while(cantidadBolsas < 1){
      cantidadBolsas = parseInt(prompt("Error. Vuelva a ingresar: "));
    }

    precioPorBolsa = parseFloat(prompt("Ingrece el precio del producto por unidad: "));
    while (precioPorBolsa < 1) {
      precioPorBolsa = parseFloat(prompt("Error. Ingrece el precio del producto por unidad: "));
    }
    totalAPagar = precioPorBolsa*cantidadBolsas;

    switch (productosConstruccion) {
      case "arena":
        acumuladorArena+=cantidadBolsas;
        totalArena+=totalAPagar;
        contadorArena++;        
        break;

      case "cal":
        acumuladorCal+=cantidadBolsas;
        totalCal+=totalAPagar;
        contadorCal++;
        break;

      default:
        acumuladorCemento+=cantidadBolsas;
        totalCemento+=totalAPagar;
        contadorCemento++;
        break;
    }    
    respuesta = prompt("Quiere ingresar otro producto? si/no");
  }while(respuesta == "si")

  totalAPagarSinDescuento = (totalCemento + totalCal + totalArena);

  if(cantidadBolsas > 10 && cantidadBolsas < 30){
    banderaPrimaria=1;
    descuento=0.85;
    totalAPagarConDescuento = totalAPagarSinDescuento * descuento;
  }else if(cantidadBolsas > 30){
    banderaPrimaria=1
    descuento=0.75;
    totalAPagarConDescuento = totalAPagarSinDescuento * descuento;
  }  

  if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladorCemento){
    productoConMasBolsas = "Arena";
  }else if(acumuladorCal>=acumuladorArena && acumuladorCal > acumuladorCemento){
    productoConMasBolsas = "Cal";
  }else{
    productoConMasBolsas = "Cemento";
  }

  if(totalArena>totalCal && totalArena>totalCemento){
    ProductoMasCaro = "Arena";
  }else if(totalCal>=totalArena && totalCal > totalCemento){
    ProductoMasCaro = "Cal";
  }else{
    ProductoMasCaro = "Cemento";
  }

  document.writeln("a)El total a pagar de la compra sin descuento es de: " + totalAPagarSinDescuento + "<br><br>");
  if(banderaPrimaria == 1){
    document.writeln("b)El total de la compra con descuento es de: " + totalAPagarConDescuento + "<br><br>");
  }  
  document.writeln("c)Producto con mas bolsas es: " + productoConMasBolsas + "<br><br>");
  document.writeln("d)El producto mas caro es: " + ProductoMasCaro + "<br><br>");
}
