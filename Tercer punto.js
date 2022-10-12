var result = '';

var totalcompra = new Number();

var pordes = new Number();
var descuento = new Number();
var totalpagar = new Number();

var articulo = new String();

function Imprimir() {
    var precio = 0;
    var cantidad = 0;
    // document.write("DESCUENTO DE COMPRA DE ARTICULOS",'<BR/>');
    // document.write("Ingresa el precio del articulo:",'<BR/>');
    // precio = Number(prompt());
    // document.write("Ingrese la cantidad comprada del articulo:",'<BR/>');
    // cantidad = Number(prompt());

    precio = document.querySelector('.control-input').value;
    cantidad = document.querySelector('.control-input1').value;

    totalcompra = precio * cantidad;

    if (cantidad < 10) {
        pordes = 7;
    }
    
    descuento = totalcompra * pordes / 100;

    totalpagar = totalcompra - descuento;

    result += `<tr><th scope="row"></th><td>${(precio)}</td><td>${(pordes)}</td><td>${(descuento)}</td><td>${(totalpagar)}</td></tr>`
    document.querySelector('.tbody').innerHTML = result;
}

