/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
    console.log(a + b)
    
}
suma(3,3)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function Elmayor(array) {
    let mayor = array[0]

    for (let index = 0; index < array.length; index++) {
        if (array[index] > mayor) {
            mayor = array[index]
            
        }
    }
    console.log(mayor)
}
Elmayor([1,10,3,4])


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function Vocales(palabra) {
    let Misvocales = ["a", "e", "i", "o", "u"]
    let i = 0
    let contador = 0
    while (i < palabra.length) {
        let letra = palabra[i].toLowerCase()
        if (Misvocales.includes(letra)) {
            contador++
            
        }
        i++
        
    }
    console.log(contador)
}
Vocales("Javascript")
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function MisStrings() {
    let array = ["jesus", "adrian", "canales"]
    let Nuevo_array = []
    for (let index = 0; index < array.length; index++) {
        Nuevo_array.push(array[index].toUpperCase())
    }
    console.log(Nuevo_array)
}
MisStrings()

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function Primos(numero1) {
    if (numero1 < 2) {
        console.log("El numero no es primo")
        return
    } else if(numero1 === 2){
        console.log("El numero es primo")
        return
    }else if(numero1 % 2 === 0 && numero1 > 2){
        console.log("No es primo")
        return
    }
    let limite = Math.sqrt(numero1)
    let Esprimo = true
    for (let i = 3; i <= limite; i += 2) {
        if (numero1 % i === 0) {
            Esprimo = false
            break
        }
    }
    if (Esprimo) {
        console.log("Es primo")
    }else{
        console.log("No es primo")
    }
}
Primos(9)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado