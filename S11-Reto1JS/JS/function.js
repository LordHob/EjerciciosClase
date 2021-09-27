const SEXO = "H"

class Persona {

    constructor(valorDNI){
        this.nombre = "R",
        this.edad = 30,
        // this.dni = prompt("Intruduce el DNI "),
        this.dni = valorDNI
        this.sexo = SEXO,
        this.peso = 80,
        this.altura = 185,
    }
}
let persona1 = new Persona("2344676");
let persona3 = new Persona("254645654");
let persona2 = new Persona("09090909");

console.log(persona1);
console.log(persona2);
console.log(persona3);
