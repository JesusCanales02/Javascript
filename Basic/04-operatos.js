//Operadores

//Operadores aritmeticos
let a = 4
let b = 2
console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a / b) //Division
console.log(a * b) //Multiplicación
console.log(a % b) //Modulo
console.log(a ** b) //Exponente

a++ //Incremento, se le suma 1
console.log(a)

b-- //Decremento, se le resta 1
console.log(b)

//Operadores de asignación
let myVariable = 2
console.log(myVariable)

myVariable += 2
console.log(myVariable)
//----------------

let myVariable1 = 2
myVariable1 += 2                       //Esto es como poner  myVariable1 = myVariable1 + 2, solo se suma pero
                                       //esto es mas corto
console.log(myVariable1)

let myVariable2 = 2
myVariable2 -= 2
console.log(myVariable2)

let myVariable3 = 2
myVariable3 *= 2
console.log(myVariable3)

let myVariable4 = 2
myVariable4 /= 2
console.log(myVariable4)

let myVariable5 = 2
myVariable5 %= 2
console.log(myVariable5)

let myVariable6 = 2
myVariable6 **= 2
console.log(myVariable6)

//Operadores de comparación
console.log(a)
console.log(a < b)
console.log(a > b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == a)
console.log(a == 5) //Igualdad de valor
console.log(a == "5")
console.log(a === 5) //Igualdad de identidad
console.log(a === "5")
console.log(a != 4)
console.log(a !== "4") //! es negacion
console.log(0 == false)
console.log(1 == true) 
console.log( 0 == "")
console.log( 1 == "wa")
console.log(null == undefined)
console.log(null === undefined)


// Truthy values (valores verdaderos)
// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
//El boolean true

// Falsy values (valores falsos)

// 0 
// on
// Null
// undefined
// Nan
// Boolean false
// Cadenas de texto

//Operadores lógicos

//AND (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 > 10 && 15 < 20)

//OR ( || ) 
console.log(5 > 10 || 5 < 10)
console.log(5 < 10 || 5 < 10)
console.log(5 > 10 || 5 > 10)
console.log(5 > 10 || 5 > 10 || 6 > 2)

console.log(5 > 10 && 15 > 20 || 30 < 40)

//Not (!)
console.log(!(5 > 10 && 5 < 10))
console.log(!(5 > 10 || 5 < 10))

//Operadores ternarios

const isRainy = false
isRainy ? console.log("Esta lloviendo") : console.log("No esta lloviendo")
