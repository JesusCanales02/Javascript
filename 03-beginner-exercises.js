// 1. Escribe un comentario en una línea
//hola a todos

// 2. Escribe un comentario en varias líneas

/*
como
estan
todos
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let numero = 23
let texto = "hola"
let estudiante = true
let nulo = null
let indefinido = undefined
let grande = BigInt(23232432432n)
let simbolo = Symbol("")

// 4. Imprime por consola el valor de todas las variables
console.log(numero)
console.log(texto)
console.log(estudiante)
console.log(nulo)
console.log(indefinido)
console.log(grande)
console.log(simbolo)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof(numero))
console.log(typeof(texto))
console.log(typeof(estudiante))
console.log(typeof(nulo))
console.log(typeof(indefinido))
console.log(typeof(grande))
console.log(typeof(simbolo))

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
numero = 1
texto = "otro"
estudiante = false
nulo = null
indefinido = undefined
grande = BigInt(646464646464n)
simbolo = Symbol("")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
numero = "si"
texto = 56
estudiante = "true"
nulo = 3
indefinido = "si"
grande = "f"
simbolo = 4
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const numero1 = 23
const texto1 = "hola"
const estudiante1 = true
const nulo1 = null
const indefinido1 = undefined
const grande1 = BigInt(23232432432)
const simbolo1 = Symbol("")
// 9. A continuación, modifica los valores de las constantes
const numero2 = 23
//numero2 = 34
const texto2 = "hola"
//texto2 = "si"
const estudiante2 = true
//estudiante2 = false
const nulo2 = null
//nulo2 = 2
const indefinido2 = undefined         //Lanza error, una const no se puede modifcar
//indefinido2 = "no"
const grande2 = BigInt(23232432432)
//grande2 = BigInt(646483833)
const simbolo2 = Symbol("")
//simbolo = "so"

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
//ya lo hice