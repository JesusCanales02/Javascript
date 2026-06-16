/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/
let myArray = [1,2,3,4]

let Person = {
    name: "jesus",
    age : 23,
    alias : "Yisus"
}
//Obejto anidado
let persona3 = {
    nombre: "Jesus",
    edad: 24,
    alias: "Yisus",
    walk: function(){
        console.log("Voy caminando")
    },
    job:{
        Ocupacion: "Programandor",
        exp: 2,
        work: function(){
            console.log(`Estoy ${this.exp} dias trabajando`)
        }
    }
}

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let [valor1, valor2, valor3, valor4] = myArray
console.log(valor1)
console.log(valor2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let ArrayNueva = [2,4,6]
let [valorn , valorn1, valorn2, valorn3 = 8] = ArrayNueva
console.log(valorn3)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let {name, age} = Person
console.log(name)
console.log(age)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name : NuevoNombre, age : EdadNueva} = Person
console.log(NuevoNombre)
console.log(EdadNueva)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {edad, job:{Ocupacion, work}} = persona3
console.log(edad)
console.log(Ocupacion)
persona3.job.work()

// 6. Usa propagación para combinar dos arrays en uno nuevo
let Arraynew = [1,2,3,4]
let ArrayMio = [5,6,7,8]
let ArrayCombinada = [...Arraynew, ...ArrayMio]
console.log(ArrayCombinada)

// 7. Usa propagación para crear una copia de un array
let MiCopia = [...Arraynew]
console.log("la array de copia: ", MiCopia)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let ObjetoConbinado = {
    colonia : "Chapultepec",
    Pais : "Mexico",
    Estado : "BC"
}
let Myobjeto = {
    Codigo : 334,
    Calle : "Mar Rojo",
    Ciudad : "Ensemada"
}
let Combinado = {...ObjetoConbinado, ...Myobjeto}
console.log("Objeto combinado: ",Combinado)
// 9. Usa propagación para crear una copia de un objeto
let ObjetsMine = {
    name : "Adrian",
    Lastname : "Canales",
    City : "Ensenada"
}
let ObjetoPropagado = {...ObjetsMine}
console.log(ObjetoPropagado)
// 10. Combina desestructuración y propagación
let Myarray10 = [1,2,3,7]
let [valor11, ...resto] = Myarray10
console.log(valor11)
console.log(...resto)
console.log(valor11, ...resto)
