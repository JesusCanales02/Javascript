//Sencilla
function saludo() {
    console.log("Hola jesus!!")
}
saludo()

function sumar(){
    console.log(5 + 5)
}
sumar()

function color(){
    console.log("verde")
}
color()

//Con parametros
function Resta(a, b) {
    console.log(a - b)
}
Resta(5, 2)

function division(a, b) {
    console.log(a / b)
}
division(5, 20)

function nombre(name){
    console.log(`hola ${name}, como estas??`)
}
nombre("Jesus!")

function guardar(numeros) {
    let aqui_va_la_Suma = 0
    for (let index = 0; index < numeros.length; index++) {
        aqui_va_la_Suma += numeros[index]
    }
    console.log(aqui_va_la_Suma)
}
guardar([1,2,3,4])

function usando_while(numeros) {
    let guardar_numero = 0
    while (numeros <= 5) {
        guardar_numero += numeros
        numeros++
        console.log(guardar_numero)
    }
}
usando_while(0)
