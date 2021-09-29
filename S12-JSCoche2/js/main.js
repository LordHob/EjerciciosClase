
//let impala = document.getElementById("impala");

//let mustang = document.getElementById("mustang");


let mensajeEleccion = document.getElementById("contenedorTexto");

let equipo1 = [];

let equipo2 = [];


const Selectcar = (elegido) => {

    //console.log("has elegido.......", elegido);
    mensajeEleccion.innerHTML = `Has elegido ${elegido}`;

    let cocheElegido = document.getElementById(elegido);

    if (cocheElegido.classList.contains("contenedorCoche2")) {
        cocheElegido.classList.remove("contenedorCoche2");
    } else {

        cocheElegido.classList.add("contenedorCoche2");
    }

}