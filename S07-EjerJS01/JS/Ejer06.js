/*
Ejercicios de JavaScript Vanilla
Autor: Rafael Giner
Version: 0.1
*/

//---------------------------------------------------

//--1- -Pedir precio de producto
    // Definir variable precio (prompt)
    // Definir constante IVA 21%

let precio = prompt("Introduce precio de producto");
const IVA = 1.21;
let result;

//--2-- Cálculo de precio con IVA
    // Multiplicar precio 1*21 --> Variable resultado guardar

function CalcIVA(valor) {
    result = valor*IVA;
}

CalcIVA(precio);


//--3-- Mostrar resultado (Precio con IVA)
    // Mostrar el resultado --> console.log()

console.log(result);