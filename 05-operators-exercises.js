/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let num1 = 2
let num2 = 4
let operacion = "+"

if (operacion === "+"){
    console.log(num1 + num2)
} else if (operacion == "-"){
    console.log(num1 - num2)
} else if (operacion == "*"){
    console.log(num1 * num2)
} else if (operacion == "/"){
    console.log(num1 / num2)
} else if (operacion == "**"){
    console.log(num1 ** num2)
} else if (operacion == "%"){
    console.log(num1 % num2)
} 
// 2. Crea una variable para cada tipo de operación de asignación,
//que haga uso de las variables utilizadas para las operaciones aritméticas

let num3 = 4
let num4 = 3
let operation = "-="

if(operation == "+="){
    num3 += num4
    console.log(num3)
} else if (operation == "-="){
    num3 -= num4
    console.log(num3)
} else if (operation == "*="){
    num3 *= num4
    console.log(num3)
} else if (operation == "/="){
    num3 /= num4
    console.log(num3)
}

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let a = 3
let b = 7
console.log(a < b)
console.log(a <= b)
console.log(a !== 6)
console.log(a == "3")
console.log(a === 3)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a > b)
console.log(a !== 3)
console.log(a === b)
console.log(b < a)
console.log(b === "3")

// 5. Utiliza el operador lógico and
console.log(89 > 56 && 9 < 10)
console.log(45>87 && 2<1)
console.log(4>8 && 9<4)
console.log(5<6 && 7<9)
console.log(8>2 && 5<1)

// 6. Utiliza el operador lógico or
console.log(78>1 || 45>90)
console.log(4>13 || 7<3)
console.log(4>2 || 8<10)
console.log(90> 1002 || 45<2)
// 7. Combina ambos operadores lógicos

console.log(45>2 && 6<7 || 98>2 || 45>8)
console.log(56>9 && 78<2 || 43>7 || 34<1)
console.log(56>7 && 90<2 || 56<100 || 56>3)
console.log(65>3 && 89>4 || 45>34 || 56<3)
console.log(76>23 && 89>3 || 8>2 || 1>45)

// 8. Añade alguna negación
console.log(!(34>2 && 5<45))
console.log(!(45>2 || 55<100))


// 9. Utiliza el operador ternario
const Tienes_Perro = true 
Tienes_Perro ? console.log("Si tengo") : console.log("no tengo")

const Te_mojaste = false
Te_mojaste ? console.log("Siii!!") : console.log("Obvio no")
// 10. Combina operadores aritméticos, de comparáción y lógicas

let num6 = 9
let num7 = 7

if(num6 < num7){
    console.log(num6 + num7)
} else if (num6 === num7){
    console.log(num6 - num7)
} else{
    console.log(num6 * num7)
}