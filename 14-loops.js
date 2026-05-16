// loops o bucles
//Sirve para repetir un bloque de codigo mientras una condicion sea verdadera
//Sirve para tareas repetitivas y grandes cantidades de datos

// FOR --------------------------- 
//Iniciamos con una variable que puede llamarse como sea yo puse "i"
//El valor 0, dice que en que valor vamos a empezar a contar
//El inidce sea menor que 5, porque queremos saludar 5 veces
//porque depues va valer 1,2,3,4 y 5
for(let i = 0; i < 5; i++){
    console.log("hola")
}

for(let i = 0; i < 5; i++){
    console.log(`hola ${i}`)
}
//Aqui el i vale 0 y muestra en panatalla el numero y el hola

const numbers = [1,2,3,4,5]
for(let i = 0; i < 5; i++){
    console.log(`Elemento ${numbers[i]}`)
}


const numero = [1,2,3,4,5,6,7]
for(let i = 0; i < numero.length; i++){
    console.log(`Nuevo Elemento ${numero[i]}`)
}
//El numero.length hace que tome todos los numeros del array, no importa si crece mas la array

// WHILE ----------------------------------
//Lo que hace es evaluar antes de cada iteracion
//Si es verdadero el bucle continua y si es falso el bucle termina

let i = 0
while(i < 5){
    console.log(`hola ${i}`)
    i++
}

//Bucle infinito
//while(true){
//}

//DO WHILE
// Se debe cumplir al menos uno  
i = 6
do{
    console.log(`presente ${i}`)
    i++
}while(i < 5)

// FOR OF
//Recorrer valores que son iterales
const myArray = [1, 2, 3, 4]

const mySet = new Set(["Jesus", "Canales", "Rojas", 37, true, "jesus.canales@mouredev.com"])

const myMap = new Map([
    ["name", "Jesus"],
    ["email", "canaless@mouredev.com"],
    ["age", 37]
])

const myString = "¡Hola, JavaScript!"

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}

//Buenas practicas
//BREAK Y CONTINUE

for(i = 0; i < 10; i++){
    if(i == 5){
        continue
    } else if(i == 6){
        continue
        //break
    }
    console.log(`hola ${i}`)
}