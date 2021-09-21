//Mi primer proyecto JS
/*
Autor: Rafael Giner
Version: 0.1
*/


//--------------------------------------------------------------------------------
//Imput

var valorA = 45;
let valorB = 15;
const PI = 3.1416;
let nombre = prompt('Introduce tu nombre');
alert(nombre);
var suma;


//Proceso y calculo

suma = valorA + valorB;
let resta = valorA - valorB;
let multip = valorB * 8;
let potencia = valorA ** 2;
let mod = valorB / valorA;

//Output    

if (suma < 60) {
    console.log('El resultado es menor de 60');
} else {
    console.log('El resultado es mayor de 60');
}

console.log(suma);


for (let i = 0; i <= 10; i++) {
    let tabla = i + "x 2 =" + i * 2;
    console.log(tabla);
}

// console.log('Hola que tal')

