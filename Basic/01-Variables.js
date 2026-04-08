/*
//exiten 3 variables var, let y const

//VAR
//Puedes acceder a ella y cambiarla
var nombre = "jesus"
console.log(nombre)

nombre = "ivan"
console.log(nombre)

//LET
//Son son accesibles dentro de un bloque
let nombre2 = "jesus adrian"
console.log(nombre2)

nombre2 = "jesus adrian 2"
console.log(nombre2)

//CONST
//Es el valor que va a tener, no puede ser reasignada
const nombre3 = "Xochitl"
console.log(nombre3)

//No sirve, no es mutable
nombre3 = "Ramon"
console.log(nombre3)*/

//Usamos la variable var para poder acceder a ella en cualquier zona y es cambiable
var nombre = "jesus"
console.log(nombre)

nombre = "isa"
console.log(nombre)

var datos = 23

datos = 12
console.log(datos)

//let solamente podemos usarla en un bloque de codigo y se puede cambiar
let apellido = "canales"
console.log(apellido)

apellido = "rojas"
console.log(apellido)

let perro = "lobo"
console.log(typeof(perro))

perro = 4
console.log(typeof(perro))

//La variable const es una variable que no s mutable es decir que no puede ser cambiada
const temperatura = 34
console.log("la temperatura es de", temperatura, "grados" )

/*
Saldra error ya que no una variable const no puede ser alterada
temperatura = 3
console.log(temperatura)
*/