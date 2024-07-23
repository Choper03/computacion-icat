
function sumarValores () {
    var valor1 = 0;
    var valor2 = 0; 

    valor1 = document.getElementById('valor1').value;
    valor2 = document.getElementById("valor2").value;

    var suma = 0; 
    suma = parseInt(valor1) + parseInt(valor2); 

    document.getElementById('resultado').innerText = "La suma es: " + suma;
    
}

function dividirValores () {
    var valor1 = 0;
    var valor2 = 0; 

    valor1 = document.getElementById('valor1').value;
    valor2 = document.getElementById("valor2").value;

    var dividir = 0; 
    dividir = parseInt(valor1) / parseInt(valor2); 

    document.getElementById('resultado3').innerText = "El resultado es: " + dividir;
    
}

function Comparar (){
    var valor1 = 0;
    var valor2 = 0; 

    valor1 = document.getElementById('valor1').value;
    valor2 = document.getElementById("valor2").value;

    if(valor1 == valor2){
        document.getElementById("resultado5").innerText = "Los numeros son iguales"
    } else if (valor1 > valor2){
        document.getElementById("resultado5").innerText = "El valor 1 es mayor que el valor 2"
    } else {
        document.getElementById("resultado5").innerText = "El valor 2 es mayor que el valor 1"
    }
}