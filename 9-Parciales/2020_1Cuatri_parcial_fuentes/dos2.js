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
  let promedio;
  let banderaPrimaria;
  let productosConstruccion;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let cantidadBolsas;
  let precioPorBolsa;
  let respuesta;
  let descuento;
  let brutoSinDescuento;
  let totalAPagar;
  let totalAPagarConDescuento;
  let totalAPagarSinDescuento;
  let productoConMasBolsas;
  let ProductoMasCaro;
  let TotalArena;
  let TotalCal;
  let TotalCemento;  
  let contadorArena = 0;
  let contadorCal = 0;
  let contadorCemento = 0;
    
  banderaPrimaria=0;
  totalArena=0;
  totalCemento=0;
  totalCal=0;
  promedio=0;
  totalAPagarSinDescuento=0;
  totalAPagarConDescuento=0;
  totalAPagar=0;
  acumuladorArena =0;
  acumuladorCal=0;
  acumuladorCemento=0;
  cantidadBolsas=0; 
  precioPorBolsa=0;
  descuento=0;

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
    
    totalAPagar = precioPorBolsa*cantidadBolsas;
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
