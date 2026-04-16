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

/*
🟢 1. Operación con condición
Declara:
dos números
una operación (+, -, *, /, %)

👉 Si el resultado es mayor a 10, imprime:
“Resultado alto”
👉 si no:
“Resultado bajo”
*/
let valor1 = 3
let valor2 = 5
let operacion = "+"
let resultado = null
if (operacion === "+"){
    resultado = valor1 + valor2
} if (resultado > 10){
    console.log("Resultado alto")
} else {
    console.log("Resultado bajo")
}

/*
🟢 2. Número positivo, negativo o cero

Declara un número.

👉 Muestra:

“Positivo”
“Negativo”
“Es cero”
*/
let num = 9
if(num > 0){
    console.log("es positivo")
}else if(num < 0){
    console.log("Es negativo")
} else{
    console.log("Es cero")
}

/*
🟢 3. Mayor de 3 números

Declara 3 números.

👉 Determina cuál es el mayor
👉 imprime el número mayor
*/
let a = 3
let b = 4
let c = 8
if (a > b && a > c){
    console.log("El numero mayor es:", a)
} else if(b > a && b > c){
    console.log("El numero mayor es:", b)
} else{
    console.log("El numero mayor es:", c)
}
/*
🟢 4. Verificación múltiple
Declara:
edad
tieneINE (true/false)
👉 Si:
edad >= 18
Y tieneINE = true

👉 imprime: “Puede votar”
👉 si no: “No puede votar”
*/
let age = 19
let tienes_INE = false
if (age >= 18 && tienes_INE == true){
    console.log("Puedes votar")
} else{
    console.log("No puede votar")
}
/*
🟢 5. Descuento doble
Declara un precio.
👉 Si:
es mayor a 100 → 10% descuento
es mayor a 200 → 20% descuento
👉 muestra el precio final
*/
let price = 425
let descount = null
if (price > 200){
    descount = price - (price * .20)
    console.log("Su descuento es de:", descount)
} else if (price > 100){
    descount = price - (price * .10)
    console.log("Su descuento es de:", descount)
} else{
    console.log("No aplica el descuento")
}

/*
🟢 6. Par Y mayor a 10
Declara un número.
👉 Si es:
par
Y mayor a 10
👉 imprime: “Cumple condición”
👉 si no: “No cumple”
*/

let d = 12
if (d % 2 === 0 && d > 10){
    console.log("Cumple condicion")
} else {
    console.log("No cumple")
}
/*
🟢 7. Mini login
Declara:
usuario (string)
password (string)
👉 Si:
usuario es "admin"
Y password es "1234"
👉 imprime: “Acceso correcto”
👉 si no: “Acceso denegado”
*/
let user = "admin"
let password = "1234"

if (user === "admin" && password === "1234"){
    console.log("Acceso correcto")
} else{
    console.log("Acceso denegado")
}

/*
🟢 1. Rango de edades
Declara una edad.
👉 Muestra:
“Niño” (0–12)
“Adolescente” (13–17)
“Adulto” (18–59)
“Adulto mayor” (60+)
*/
let ed = 78
if (ed <= 12){
    console.log("Niño")
} else if(ed >= 13 && ed <=17){
    console.log("Adolencente")
} else if(ed >= 18 && ed <= 59){
    console.log("Adulto")
}else {
    console.log("Adulto mayor")
}

/*
🟢 2. Número divisible
Declara un número.
👉 Si es divisible entre:
3 → imprime “Fizz”
5 → imprime “Buzz”
ambos → “FizzBuzz”
💥 (este es clásico de entrevistas)
*/
let num9 = 15
if (num9 % 3 === 0 && num9 % 5 === 0){
    console.log("FizzBuzz")
} else if (num9 % 3 === 0){
    console.log("Fizz")
} else if (num9 % 5 === 0){
    console.log("Buzz")
}


/*
🟢 3. Sistema de calificaciones
Declara una calificación (0–100).
👉 Muestra:
90–100 → “A”
80–89 → “B”
70–79 → “C”
60–69 → “D”
<60 → “F”
*/
let calificacion = 78
if (calificacion >= 90 && calificacion <= 100){
    console.log("A")
} else if (calificacion >= 80 && calificacion <= 89){
    console.log("B")
} else if (calificacion >= 70 && calificacion <= 79){
    console.log("C")
} else if (calificacion >= 60 && calificacion <= 69){
    console.log("D")
} else if (calificacion <= 60){
    console.log("F")
}


/*
🟢 4. Acceso por rol
Declara:
rol ("admin", "user", "guest")
👉 Muestra:
admin → “Acceso total”
user → “Acceso limitado”
guest → “Solo lectura”
*/
let rol = "user"

if(rol === "admin"){
    console.log("Acceso total")
} else if (rol === "user"){
    console.log("Acceso limitado")
} else if (rol === "guest"){
    console.log("Solo lectura")
}else{
    console.log("No tienes acceso")
}

/*
🟢 5. Validación de contraseña
Declara una contraseña.
👉 Si:
tiene más de 8 caracteres
👉 imprime “Contraseña válida”
👉 si no → “Muy corta”
*/
let contra = "Jesuswwww"
if (contra.length > 8){
    console.log("contarsena valida")
} else {
    console.log("muy corta")
}

/*
🟢 6. Número dentro de rango
Declara un número.
👉 Si está entre:
10 y 50 → “Dentro del rango”
👉 si no → “Fuera del rango”
*/
let num0 = 23
if (num0 >= 10 && num0<= 50 ){
    console.log("Dentro del rango")
} else{
    console.log("Fuera del rango")
}


/*
🟢 7. Compra con envío
Declara:
totalCompra
👉 Si:
500 → “Envío gratis”
👉 si no → “Envío con costo”
*/
let totalCompra = 431
if(totalCompra > 500){
    console.log("envio gratis")
} else {
    console.log("Envio con cost")
}
