/*Reto 1: Edad futura

Crea una variable con tu edad actual.
Calcula cuántos años tendrás dentro de 10 años.
Muestra el resultado en consola.
*/
let edad = 30
console.log("La edad en 10 años sera: ",edad + 10)

/*🟢 Reto 2: Área de rectángulo

Declara dos variables: base y altura.
Calcula el área del rectángulo.
Muestra el resultado.
*/
let base = 3
let altura = 5
console.log("El area del rectangulo es: ", (base * altura))
/*🟢 Reto 3: Conversión de temperatura

Declara una variable con grados Celsius.
Convierte ese valor a Fahrenheit.
Muestra el resultado.
*/
let Gradros = 32
console.log("El resultado es: ", ((Gradros * 1.8)+32))

/*🟢 Reto 4: Número par o impar

Declara un número.
Determina si es par o impar.
Muestra el resultado en consola.
*/

let num1 = 2
num1 % 2 === 0
? console.log("Es par")
: console.log("Es impar")
/*if (num1 % 2 === 0){
    console.log("Es par")
}
else{
    console.log("Es impar")
}
*/
/*

🟢 Reto 5: Calculadora simple

Declara dos números.
Declara una variable que represente una operación (+, -, *, /).
Realiza la operación correspondiente.
Muestra el resultado.
*/
let numero1 = 4
let numero2 = 2
let aritmetica = "*"

if (aritmetica === "+"){
    console.log(numero1 + numero2)
} else if (aritmetica == "-"){
    console.log(numero1 - numero2)
}else if (aritmetica == "*"){
    console.log(numero1 * numero2)
}else if (aritmetica == "/"){
    console.log(numero1 / numero2)
}

/*🟢 Reto 6: Número mayor

Declara dos números.
Determina cuál de los dos es mayor.
Muestra el resultado.
*/
let mayor = 1
let menor = 2
/*
if (mayor >= menor){
    console.log("El mumero mayor es: ", mayor)
}
else{
    console.log("Error", menor, "es el numero mayor")
}
*/
mayor >= menor
? console.log("El numero mayor es:", mayor)
: console.log("Error", menor, "Es el numero mayor")

/*🟢 Reto 7: Descuento

Declara el precio de un producto.
Si el precio es mayor a 100, aplica un descuento del 10%.
Muestra el precio final.
*/
let precio = 120
if (precio > 100){
    let precio_final = precio - (precio * .10)
    console.log("Su precio es:",precio_final)
} else
    console.log("No aplica el descuento")
//precio * .10
//? console.log("El precio es:", precio)
//: console.log("No hay descuento")