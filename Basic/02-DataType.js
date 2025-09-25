//Cadena de texto (String)
let name = "Jesus"
let alias = "Crack"
let email = "jadrian5b@moredev.com"

//Números (Number)
let age = 22
let altura = 1.70

//Booleanos
let IsTeacher = true
let IsStudent = false
console.log(typeof IsStudent)

//Undefined
let undefined 
console.log(typeof(undefined))

/*Sirve para mostrar que no hay
variable definida, pero en un
futuro poder poner una
*/

//Null
let ValorNulo = null
console.log(typeof(ValorNulo))
/*Esta variable es nula
despues esperamos que esta 
variable tenga un valor
*/

//Symbol
let Simbolo = Symbol("mySymbol")
console.log(typeof(Simbolo))
/*Identificador de propiedades
intentar evitar colisiones y 
es identificadores unicos*/

//BigInt
let MyBigInt1 = BigInt(12343243543321312321543)
let MyBigInt2 = 12343243543321312321543n
console.log(typeof(MyBigInt1))
/*Nos sirve cuando intentamos 
representar un numero muy grande
que no puede ser representado de tipo
Number */
