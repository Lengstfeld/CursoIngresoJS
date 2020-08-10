function mostrar()
{
    let precioFinal;
    let precio;
    let descuento;

    precio = parseFloat(prompt("Que precio tiene: "));
    descuento = parseFloat(prompt("De cuanto es el descuento: "));
    precioFinal = precio * (descuento / 100);



    document.getElementById("elPrecioFinal").value = precioFinal



}
