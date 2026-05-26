/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(i = 1; i < 21; i++){
    console.log(`numeros: ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0

for(let i = 1; i <= 100; i++){
    suma += i
}

console.log(`la suma es ${suma}`)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(i = 0; i<51; i++){
    if(i % 2 !== 0){
        continue}
        console.log(`el numero es par ${i}`)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArray1 = []
myArray1 = ["jesus", "adrian", "canales", "rojas"]
for(i = 0; i < myArray1.length; i++ ){
    console.log(myArray1[i])
}/*
for (let value of myArray1) {
    console.log(value)
}*/


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let palabra = "jesus"
let contador = 0
let vocales = ["a", "e", "i","o","u"]
for(i = 0; i< palabra.length; i++){
    if(vocales.includes(palabra[i])){
        contador++
    }
}
console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let MiArray = [1 ,2, 3, 4]
let indice = 0
let Miproducto = 1

while (indice < MiArray.length) {
    Miproducto *= MiArray[indice]
    indice++
}
console.log(Miproducto)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let index = 1; index < 11; index++) {
    console.log(`Multiplicacion de ${index} * 5 es: `, index * 5)
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena = "hola"
let result = ""
let inidice = cadena.length - 1

while (inidice >= 0) {
    result += cadena[inidice]
    inidice--
}
console.log(result)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let viejoNumero = 1
let nuevoNumero = 0
let siguiente = 0
let contador7 = 0
while (contador7 < 10) {
    //contador solo dice hazlo 10 veces y ya
    siguiente = nuevoNumero + viejoNumero
    nuevoNumero = viejoNumero
    viejoNumero = siguiente
    contador7++
    console.log(viejoNumero)

}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let myArray = [1,2,3,11,12,15,5]
let nuevoArray = []
 for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] > 10) {
        console.log(myArray[index])
        nuevoArray.push(myArray[index])
        //“toma este valor y agrégalo al nuevo array”
        //Aqui lo agregamos con unshift o push al nuevo array
    }
 }
//nuevoArray.pop()
console.log(nuevoArray)
