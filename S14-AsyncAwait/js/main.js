
// EJEMPLO DE EJERCICIO HECHO EN CLASE, TE PIDE NUMERO, CUENTA LOS NUMEROS QUE LE HAS DICHO X2, Y PASADOS 5 SEGUNDOS TE CUENTA LOS NUMEROS QUE LE HAS DICHO, PARTIENDO DE i=0 (en este caso)

// ----------------------------------------------------------------------------------//

// const contar = async (numeroUser) => {

//     try {

//         for (let i = 0; i < numeroUser; i++){
//             console.log(i);
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }

// let numeroUser = parseInt(prompt("Introduzca número por favor"));

// setTimeout(() => {
//     contar(numeroUser);
// }, 5000);

// contar(numeroUser * 2);

// --------------------------------------------------------------------------------//

// Propuesta de ejercicio:

// usando funcion de contexto asíncrono(async) junto con setTimeOut de JavaScript, se mostrará el siguiente contenido.

//     - Primero pedimos un número al usuario mediante prompt.Ese número se deberá de mostrar automáticamente dividido entre dos.

//     - A los 5 segundos de haber pedido el número original, lo mostraremos(el original) multiplicado por dos.

//     - A los 3 segundos de mostrar el número multiplicado por dos, lo mostraremos dividido entre tres.

let numeroUser = parseFloat(prompt("Introduzca número por favor"));
    console.log(numeroUser / 2);

setTimeout(() => {
    resultado = numeroUser * 2;
    console.log(resultado);
    setTimeout(() => {
        console.log(resultado / 3);
    }, 3000);
}, 5000);

