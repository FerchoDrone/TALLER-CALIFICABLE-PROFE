var result = '';
var n = new Number();
var i = new Number();
var x = new Number();
var a = new Number();
var b = new Number();
var d = new Number();
var c = new Number();

function Ejecutar() {
    
    // alert("Cuantos números desea ingresar:",'<BR/>')
    n = Number(prompt());
    // n = document.querySelector('.caja1').value;
    
    i = 1;
    c = 0;
    menorCero = 0;
    mayorCero = 0;
    while (i <= n) {
        //    alert("Ingresar un numero",'<BR/>')
        x = Number(prompt());
    //  x = document.querySelector('.caja2').value;
        if (x == 0) {
            c = c + 1;
            
        } else {
            if (x <= 0) {
                menorCero++;
            }
            else {
                mayorCero++;
            }
        }
        i = i + 1;
    }
}

function Imprimir(){
    result += ` <tr><th scope="row"></th><td >Numeros Iguales a cero:${c}</td></tr> `
    document.querySelector('.tbody1').innerHTML = result;

    result += ` <tr><th scope="row"></th><td >Numeros Menores a cero:${menorCero}</td></tr> `
    document.querySelector('.tbody1').innerHTML = result;

    result += ` <tr><th scope="row"></th><td >Numeros Mayores a cero:${mayorCero}</td></tr> `
    document.querySelector('.tbody1').innerHTML = result;  
}





