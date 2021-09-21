/*
Ejercicios de JavaScript Vanilla
Autor: Rafael Giner
Version: 0.1
*/

//---------------------------------------------------

//----------------Imput

let num = prompt("Introduce numero");
let text = "";

//----------------Proceso y calculo

if (num % 2 == 0) {
    text = "Es numero par";
} else {
    text = "No es un numero par";
}

//----------------Output  
console.log(text);