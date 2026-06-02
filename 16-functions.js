//Funciones

//Simple 
function myFuction(){
    console.log("Mi funcion!!")
}
for (let index = 0; index < 5; index++) {
    myFuction()
}
//--------------------------------------
//Con parametros
function conParametros(name){
    console.log(`Hola ${name}!!`)
}
conParametros("Adrian!")
conParametros("Jesus!")

//-------------------------------------
//Funciones anonimas
const Minombre = function(name){
    console.log(`hola mi nombre es ${name}`)
}
Minombre("Jesus")

var MiApellido = function(apellido){
    console.log(`Mi apellido es ${apellido}`)
}
MiApellido("Canales")

const Segundo_nombre = function(Lasname){
    console.log(`Mi segundo nombre es ${Lasname}`)
}
Segundo_nombre("Rojas")

//Arrow fuctions
const Saludo  = (saludando) => {
    console.log(`Hola, ${saludando}`)
} 
Saludo("Como estas?")

//Tambien podemos quitar las llaves {}
const Minombre1 = (Nombre1) => console.log(`Mi nombre es ${Nombre1}`)
Minombre1("jesus")

//Parametros
function sum(a, b) {
    console.log(a + b)
}
sum(5, 4)

function defaultSum(a = 0, b = 0){
    console.log(a + b)
}
defaultSum(1)
defaultSum()
defaultSum(5, 5)

//Retorno de valores
function multiplicacion(a, b){
    return a * b
}
console.log(multiplicacion(2, 3))

//----------------------- ejemplo
//Bsicamente lo que haca return es "guardar" el valor en la vairbale esperando que
//en algun futuro se use como en Misuma o Division, que hace que el resultado se
//Multiplique con otro valor, sin eso daria Nan, peor si no quieres multiplicarlo en el
//futuro simplemnte no pasa nada y lo imprimes con el console.log(Misuma(3,5)) y listo

function Misuma(a, b) {
    let resultado = a + b
    return resultado
}
    let regregar = Misuma(3 , 3)
    let Otra_suma = regregar * 2
    console.log(Otra_suma)

function Division(a, b) {
    let result = a / b
    return result
}
let imprimir = Division(10 , 2)
let restar = imprimir - 2
console.log(restar)
//----------------------------------

//funciones anidadas
function externa() {
    console.log("funcion externa")
    function interna(){
        console.log("Funcion imterna")
    }
    interna()
}
externa()
//La importancia de donde se pone el llamado de la funcion, si es afuera marca error interna(),
//debe esta afuera de las llaves de su funcion como externa() esta afuera de su funcion

