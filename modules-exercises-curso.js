import Materia, { division, edad, Game, Miedad, Multiply, nombre, Personaje, resta, suma, Superheroe } from "./31-modules-exercises.js";
import {myFuction} from "./16-functions.js"
import { temperatura } from "./Basic/01-Variables.js";
import { Person } from "./22-classes.js";
//1
console.log(suma(2,3))

//2
console.log(nombre)

//3
let Yo = new Personaje("sergio", 23, "sergay")
console.log(Yo)
Yo.Saludar()

//4
console.log(resta(100,54))

//5
console.log(edad)

//6
let heroe = new Game("Jesus", 23, "Controlar el agua")
console.log(heroe)
heroe.Skill()

//7
console.log(division(5,5))
let MiMateria = new Materia("mate", "ingles")
console.log(MiMateria)
console.log(Superheroe)

//8
console.log(Miedad)
console.log(Multiply(3,2))

//9
myFuction()
console.log(temperatura)
let Mianimal = new Person("dobby",43,"dede")
console.log(Mianimal)

//10