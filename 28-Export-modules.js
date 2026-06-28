//Exportacion de modulos

//Funciones

export function add(a, b) {
    return a + b
}
console.log(add(5,10))

//Propiedades
export const PI = 3.1416
export let nombre = "Jesús"

//Clases
export class Circule {
    constructor(radius) {
        this.radius = radius
    }
    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
    perimeter(){
        return 2 * Math.PI * this.radius
    }
}

//Exportacion por defecto
export default function defaultImport(a,b){
    return a - b
}


/*export default class MyClass{
    func(){
        console.log("Mi clase")
    }
}
*/