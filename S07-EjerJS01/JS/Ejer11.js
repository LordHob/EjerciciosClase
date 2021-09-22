/*
Ejercicios de JavaScript Vanilla
Autor: Rafael Giner
Version: 0.1
*/

//---------------------------------------------------

let dia = prompt('Introduce el día de la semana');

switch (dia) {
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
    case "Viernes":
    alert("Día laborable")
        break;
    case "Sábado":
    case "Domingo":

    default:
    alert("Cómprate un cuadernillo Rubio zoquete")
        break;
}