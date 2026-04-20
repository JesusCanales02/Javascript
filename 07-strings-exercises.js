/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena = "Jesus"
let juntos = "Hola " + cadena
console.log(juntos)
// 2. Muestra la longitud de una cadena de texto
let longi = "Hola a todos"
console.log(longi.length)

// 3. Muestra el primer y último carácter de un string
let caracter = "Primero"
//console.log(caracter[0], caracter.at(-1))
console.log(caracter[0])
console.log(caracter.at(-1))
// 4. Convierte a mayúsculas y minúsculas un string
let mayus = "Siempre"
console.log(mayus.toUpperCase(), mayus.toLocaleLowerCase())
console.log(mayus.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let texto = `computadora
no sirve
por que??`
console.log(texto)
// 6. Interpola el valor de una variable en un string
let saludo = `Hola ${cadena}`
console.log(saludo)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let espacios = "Como lo voy hacer"
let resultado = espacios.replace(/ /g,"_");
console.log(resultado)

let space = "No se como hacerlo"
let result = space.split(" ").join("_")
console.log(result)

let example = "Si ya entendi"
console.log(example.replace("Si ya entendi", "Si_ya_entendi"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
let word = "Bienvenidos a vs code"
console.log(word.includes("code"))

// 9. Comprueba si dos strings son iguales
let igualdad = "iguales"
console.log(igualdad.includes("iguales"))
// 10. Comprueba si dos strings tienen la misma longitud
let grande = "Grande"
let other = "Hola"
if (grande.length > other.length ){
    console.log("Es mas grande por", grande.length - other.length,"caracteres")
} else if (grande.length < other.length){
    console.log("Es mas grande por", other.length - grande.length,"caracteres")
} else{
    console.log("Son iguales")
}