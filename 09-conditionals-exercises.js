/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let miNombre = "Jesus"
let name = 0

if(name === 0){
    console.log("Mi nombre es Jesus")
} else{
    console.log("No te diré cual es")
}

//Este funciona mejor, porque la varibale toma el valor

if(miNombre === "Jesus"){
    console.log("Mi nombre es Jesus")
} else {
    console.log("No lo es")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Adrian"
let password = 123
if(user === "Adrian" && password === 123){
    console.log("Coincide, pasa")
} else {
    console.log("No Coincide")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 2
if(numero > 0){
    console.log("El numero es positivo")
} else if(numero < 0) {
    console.log("El numero es negativo")
} else if(numero === 0){
    console.log("El numero es cero")
}else{
    console.log("No cumple")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let mayor = 18
let miEdad = 18
let resta = mayor - miEdad
if(miEdad >= mayor){
    console.log("Puedes votar")
} else{
    console.log(`No puedes votar, te hace falta unos ${resta} años`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 
const edad = 18
edad >= 18 ? console.log("Adulto") : console.log("Menor")

let age = 18
resultado = age >= 18 ? console.log("Es adulto") : console.log("Es menor") 

const ag = age >= 18 ? "Adultin" : "Chiquito"
console.log(ag)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 4

if (mes >= 3 && mes <= 5){
    console.log("Primavera")
} else if(mes >=6 && mes<=8){
    console.log("Verano")
} else if(mes >=9 && mes<=11){
    console.log("Otoño")
} else if(mes ===12 || mes === 2 || mes === 1){
    console.log("Invierno")
}else{
    console.log("Error")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if(mes === 1 || mes ===3 || mes === 5 || mes ===7 || mes === 8 || mes === 12){
    console.log("El numero de dias es 31")
} else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
    console.log("El numero de dias es 30")
} else if(mes === 2){
    console.log("El numero de dias son 28 o 29")
}else{
    console.log("Error")
}

let mess = 1

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

console.log(`El mes ${mess} es ${meses[mess - 1]} y tiene ${dias[mess - 1]} días`)

// switch
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let saludo = 7
let idioma
switch(saludo){
    case 0:
        idioma = "hola"
        break
    case 1:
        idioma = "Hello"
        break
    case 2:
        idioma = "Alo"
        break
    default:
        idioma = "Error"
} 
console.log(idioma)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mounth = 1
let ubicar = null
switch(mounth){
    case 1:
        ubicar = "Invierno"
        break
    case 2:
        ubicar = "Invierno"
        break
    case 3:
        ubicar = "Primavera"
        break
    case 4:
        ubicar = "Primavera"
        break
    case 5:
        ubicar = "Primavera"
        break
    case 6:
        ubicar = "Verano"
        break
    case 7:
        ubicar = "Verano"
        break
    case 8:
        ubicar = "Verano"
        break
    case 9:
        ubicar = "Otoño"
        break
    case 10:
        ubicar = "Otoño"
        break
    case 11:
        ubicar = "Otoño"
        break
    case 12:
        ubicar = "Invierno"
        break
    default:
        ubicar = "Error"
}
console.log(ubicar)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let moun = 6
let di = null
switch(moun){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        di = `El mes ${moun} tiene 31 dias`
        break
    
    case 4:
    case 6:
    case 9:
    case 11:
        di = `El mes ${moun} tiene 30 dias`
        break

    case 2:
        di = `El mes ${moun} tiene 28 o 29 dias`
        break
    default:
        di = "Error"
}
console.log(di)
