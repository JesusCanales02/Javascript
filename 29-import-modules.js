//Importacion de modulos

import { add, Circule, nombre, PI } from "./28-Export-modules.js";
import defaultImport from "./28-Export-modules.js";

//Funciones
console.log(add(5,10))

//Propiedades
console.log(PI)
console.log(nombre)

//Clases
let circule = new Circule(20)
console.log(circule.radius)
console.log(circule.area().toFixed(2))
console.log(circule.perimeter().toFixed(2))

//Importacion por defecto
//Solo se puede uno por archivo
console.log(defaultImport(3,2))

//let myClass = new defaultImport()
//myClass.func()

//Proyecto modular

//import {Myimport} from "./directory/files.js" 
//Es un ejemplo cuando queremos traer algo

