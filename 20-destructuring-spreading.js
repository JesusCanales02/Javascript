//Desestructuracion
//Nos permite extraer valores de array por un lado o de objetos

let myArray = [1,2,3,4]

let Person = {
    name: "jesus",
    age : 23,
    alias : "Yisus"
}

//Sintaxis arrays
let [Myvalor1 , Myvalor2, Myvalor3] = myArray
console.log(Myvalor1)
console.log(Myvalor2)
console.log(Myvalor3)
 
//Sintaxis arrays con valores predeterminados
 let [Myvalor4 = 0 , Myvalor5 = 0, Myvalor6 = 0, Myvalor7 = 0, Myvalor8 = 9] = myArray
console.log(Myvalor4)
console.log(Myvalor5)
console.log(Myvalor6)
console.log(Myvalor7)
console.log(Myvalor8)
 
//Ignorarelemntos array
 let [Myvalor9 = 10 , , , Myvalor12 = 13] = myArray
console.log(Myvalor9)
console.log(Myvalor12)

//Sintaxis Objetos

let {name, age, alias} = Person
console.log(name)
console.log(age)
console.log(alias)

//Sintaxis objets con valores predetermiandos
let {name2, age2, alias2, email = "email@gamil.com"} = Person
console.log(name2) //No existe
console.log(age2) //No existe
console.log(alias2) //No existe
console.log(email)

//Sintaxis objets con nuevos nombres de variables
let {name : name3, age : age3, alias : alias3} = Person
console.log(name3)
console.log(age3)
console.log(alias3)

/*Myvalor1 = 23
let mensaje = `hola mi edad es ${Myvalor1}`
console.log(mensaje)
console.log(myArray)
console.log(Myvalor1)
*/
let persona3 = {
    name: "Jesus",
    age: 24,
    alias: "Yisus",
    walk: function(){
        console.log("Voy caminando")
    },
    job:{
        name: "Programando en el",
        exp: 2,
        work: function(){
            console.log(`Estoy ${this.exp} dias trabajando`)
        }
    }
}

let {name, age} = persona3