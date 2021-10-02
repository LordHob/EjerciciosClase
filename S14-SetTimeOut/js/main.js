
// EJERCICIO DE SET TIME OUT - HAY QUE MOSTRAR 3 NOMBRES EN UN DETERMINADO TIEMPO
// OPCION 1

// setTimeout(() => {
//     console.log("Ha pasado 1 segundo");

// }, 1000)

// setTimeout(() => {
//     console.log("Han pasado 2 segundos");

// }, 2000)

// setTimeout(() => {
//     console.log("Han pasado 5 segundos");

// }, 5000)

// OPCION 2

setTimeout(() => {
    console.log("Nombre 1")
    setTimeout(() => {
        
        console.log("Nombre 2")
        setTimeout(() => {

            console.log("Nombre 3")

        },5000)
    },3000)
},2000)