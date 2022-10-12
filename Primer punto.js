var result ='';
var a_nombre="";
var a = 0;
var b_nombre="";
var b = 100;

function Datos(){
    var nombre= "";
    var dato=0;

    nombre = document.querySelector('.caja1').value;
    dato = document.querySelector('.caja3').value;
     
    if (dato >= a) {
        a_nombre=nombre;
        a = dato; 
    }

        if (dato <= b) {
            b_nombre=nombre;
            b= dato;
        }
        


result += `<tr><th scope= "row"></th><td>${document.querySelector('.caja1').value}</td><td>${document.querySelector('.caja2').value}</td><td>${document.querySelector('.caja3').value}</td></tr>`
document.querySelector('.tbody').innerHTML = result;
}

function Imprimir(){
// alert(a_nombre)
// alert(a)
// alert(b_nombre)
// alert(b)
result += ` <tr><th scope="row"></th><td >${a_nombre}</td><td>${a}</td><td>${b_nombre}</td><td>${b}</td></tr> `
document.querySelector('.tbody1').innerHTML = result;

}


