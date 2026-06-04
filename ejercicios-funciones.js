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

function division(nums) {
    for (let index = 1; index < 10; index++) {
        console.log(`la multiplicaciones de ${index} * ${nums} es:`, nums * index)
    }
    
}
division(5)

//Funciones anonimas
const ejemplo = function(nombre){
    console.log(`Hola mi nombre es ${nombre}`)
}
ejemplo("jesus")

var apellido = function(apellido){
    console.log(`apellido es ${apellido}`)
}
apellido("canales")

const Miedad = function(age){
    console.log(`Mi edad es ${age}`)
}
Miedad(23)

//Funciones arrow
const flecha = (react) => console.log(`ves que sirve para ${react}`)
flecha("react")

const flecha1 = (react) => {console.log(`ves que sirve para ${react}`)}
flecha1("react de componenetes")

const saludar = (mano) => console.log(`Jesus!, ${mano}`)
saludar("como estas?")

//funciones default
function Midefault(a = 0, b = 0) {
    console.log(a + b)
}
Midefault(2,3)


//funciones anonimas
const segundo_nombre = function(Segundo){
    console.log(`Mi segundo nombre es ${Segundo}`)
}
segundo_nombre("Rojas")

//Funciones Anidadas
function div(div1) {
    console.log(div1 / 2)
    function sum(suma1) {
        console.log(suma1 + 2)
    }
    sum(4)
}
div(10)

//Funciones arrow
const cafe = (Sabor) => console.log(`Mi sabor favorito de cafe es ${Sabor}`)
cafe("el Capuchino")

//Return
function Miresta(resta1, resta2) {
    let Miresultado = resta1 - resta2
    return Miresultado
}
let otra_resta = Miresta(4,10)
let Aqui_vamos = otra_resta * 2
console.log(Aqui_vamos)

//Defualt
function Midefault1(a = 0, b =0){
    console.log(a + b)
}
Midefault1(2,3)