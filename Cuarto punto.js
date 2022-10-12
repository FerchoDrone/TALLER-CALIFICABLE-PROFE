
function Ejecutar() {
var result = '';
var array = new Array();
var a = "";
var b = "";
var i = 0;

 
    // document.write("Por favor ingrese n", '<BR/>');
    // n = Number(prompt());
    n= document.querySelector('.control-input').value;
    // a = 0;
    // b = 1;
    for (i = 0; i < n; i++) {
        if (i <= 1) {
            array[i] =1;
        }
        else {
            array[i] = array[i-1] + array[i -2];
        }
        // document.write(a, '<BR/>');
        // c = a + b;
        // a = b;
        // b = c;
        result += `<tr><th scope="row"></th><td >${array[i]}</td></tr>`
        
    }
    // result += `<tr><th scope="row"></th><td >${c}</td></tr>`
    document.querySelector('.tbody1').innerHTML = result;
}

function Clear(){
    document.querySelector('.tbody1').innerHTML = "";
}