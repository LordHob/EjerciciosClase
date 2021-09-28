

//Herencia en Programación Orientada a Objetos

//Clase padre

class Vehiculo {

    constructor(marca, color, ruedas, velocidad, aceleracion, ocupantes) {

        this.marca = marca,
        this.color = color,
        this.ruedas = ruedas,
        this.velocidad = velocidad,
        this.aceleracion = aceleracion,
        this.ocupantes = ocupantes
    }

    acelerar() {
        this.velocidad += this.aceleracion;
    }

    frenar() {

    }

}

//Clases hijas

class Coche extends Vehiculo {

    constructor(marca, color, ruedas, velocidad, aceleracion, ocupantes, motor, cv, transmision, combustible) {
        super(marca, color, ruedas, velocidad, aceleracion, ocupantes);

        this.motor = motor,
        this.cv = cv,
        this.transmision = transmision,
        this.combustible = combustible
    }

    aparcar() {

    }

    backwards() {

    }

}

class Bicicleta extends Vehiculo {

    constructor(marca, color, ruedas, velocidad, aceleracion, ocupantes, marchas, tipo) {
        super(marca, color, ruedas, velocidad, aceleracion, ocupantes);

        this.marchas = marchas,
        this.tipo = tipo
    }

    saltar() {

    }
}

let coche1 = new Coche("Toyota", "Negro", 4, 0, 50, 4, 2.0, 110, "Automática", "Gasolina");

let bicicleta1 = new Bicicleta("Btwin", "Verde", 3, 0, 50, 1, 5, "Triciclo");

console.log("SALIDA DE META....", coche1);

coche1.acelerar();

console.log("PRIMERA ACELERACION....", coche1);


// A partir de aquí hay que usar bucles para hacer que la carrera siga