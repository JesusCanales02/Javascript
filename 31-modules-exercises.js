/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/
// 1. Exporta una función
export const suma = (a,b) => a + b 
// 2. Exporta una constante
export const nombre = "Jesús"
// 3. Exporta una clase
export class Personaje {
    constructor(name,edad,alias) {
        this.name = name,
        this.edad = edad,
        this.alias = alias
    }
    Saludar(){
        console.log(`Hola ${this.name}, tu alias es ${this.alias} verdad? jaja, un gusto, me dijiste que tenias ${this.edad}?`)
    }
}
let nuevo = new Personaje("Jesus", 34, "Yisus")
console.log(nuevo)
nuevo.Saludar()
// 4. Importa una función
export const resta = (a,b) => a - b

// 5. Importa una constante
export const edad = 23 
// 6. Importa una clase
export class Game {
    constructor(name,age,power) {
        this.name = name,
        this.age = age,
        this.power = power
    }
    Skill(){
        console.log(`Mi nombre es ${this.name}, y tengo ${this.age} años, tengo la habilidad de ${this.power}`)
    }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export const division = (a,b) => a / b
export default class Materia {
    constructor(mate, ingles) {
        this.mate = mate,
        this.ingles = ingles
    }
}
export const Superheroe = "Spiderman"

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
export const Miedad = 34
export const Multiply = (a,b) => a*b
//No se puede un segundo default en un archivo 

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior