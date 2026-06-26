/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function Retiro(saldoRetiro, Cantidad) {
    if (saldoRetiro > Cantidad) {
        throw new Error("Saldo insuficiente")
    } else{
        console.log("Retiro exitoso")
    }
    
}
try {
    Retiro(300,800)
    
} catch (error) {
    console.error("Error de sistema,", error.message)    
}

// 2. Crea una función que utilice warn correctamente

function Conexion(a,b) {
    let resultado = a + b
    console.warn("Ya no usen la variable `resultado`, ya esta muy usada")
    return resultado
}
console.log(Conexion(3,2))
// 3. Crea una función que utilice info correctamente
function info(a, b) {
    let resultado = a-b
    console.info("Usamos la variable resultado para que en un futuro puedas usar el resultado de la resta en una nueva variable")
    return resultado
}
info(34,23)

// 4. Utiliza table
let Miobjeto = {
    name: "Jesús",
    age : 23,
    city: "Ensenada",
    year: 2026,
    Profesion : function(){
        console.log("wadawdwa")
    }.toString() //Para ver en table lo que muestra nuestra funcion
}
console.table(Miobjeto)
// 5. Utiliza group
let canciones = {
    titulo1 : "Manzana",
    titulo2 : "Pera",
    titulo3 : "Uva",
    titulo4 : "Sandia",
}
console.group("Titulos mas vistos")
console.log("Aqui los veras")
console.group("Titulos")
console.log(canciones.titulo1, "-", canciones.titulo2)
console.log(canciones.titulo3, "-", canciones.titulo4)
console.groupEnd()

// 6. Utiliza time
console.time("Cuanto dura")
for (let index = 0; index < 30; index++) {
}
console.timeEnd("Cuanto dura")


// 7. Valida con assert si un número es positivo
function Validar(a) {
        console.assert(a > 0,"Error, no es mayor")
}
Validar(2)
Validar(0);  
Validar(-5);

// 8. Utiliza count
console.count("hola")
console.count("hola")
console.count("hola")
console.countReset("hola")
console.count("hola")


// 9. Utiliza trace
// 9. Utiliza trace

function terceraFuncion() {
    console.log("Llegamos a la última función");
    console.trace(); // 🕵️‍♂️ ¡Aquí pedimos el mapa de la ruta!
}

function segundaFuncion() {
    terceraFuncion(); // Llama a la tercera
}

function inicio() {
    segundaFuncion(); // Llama a la segunda
}

// Arrancamos el viaje llamando a la primera función
inicio();
// 10. Utiliza clear
console.clear()