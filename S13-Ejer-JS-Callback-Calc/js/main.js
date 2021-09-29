
let contenedorNumerosAOperar = [];

let botonSuma = document.getElementById("suma");
let lcd = document.getElementById("lcd");

const addNumber = (numeroPulsado) => {

    if(contenedorNumerosAOperar.length < 2){
        contenedorNumerosAOperar.push(numeroPulsado);
        console.log("entro",contenedorNumerosAOperar);

    } else {
        console.log("ya has escogido los números previamente",contenedorNumerosAOperar);
    }

}

//Evento que está siendo permanentemente vigilado & en escucha por JavaScript

botonSuma.addEventListener('click', () => {
    
    let resultado = parseInt(contenedorNumerosAOperar[0]) + parseInt(contenedorNumerosAOperar[1]);

    setTimeout(()=> {
        lcd.innerHTML = `${resultado}`;
    },500);
    
})