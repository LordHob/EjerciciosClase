/*
Ejercicios de JavaScript Vanilla
Autor: Rafael Giner
Version: 0.1
*/

//---------------------------------------------------

let NVentas = prompt('Introduce el número de articulos vendidos');
let Result = 0;

for (let i = 1; i <= NVentas; i++) {
    Result = Result + parseFloat(prompt("Precio del artículo " + i));
}

alert("El precio total es: " + Result);