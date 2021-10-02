const cambiarPantalla = (pantallaDestino) => {

    // Primer paso generamos array con todas la fases

    let arrayDeFases = ["1","2","3","4"];

    arrayDeFases = arrayDeFases.filter(iterador => !pantallaDestino.includes(iterador));

    document.getElementById(pantallaDestino).style.display = "block";

    for (let cadaPosicion of arrayDeFases) {
        document.getElementById(cadaPosicion).style.display = "none";

    }
}