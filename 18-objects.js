//El dato que no es primitivo es un OBJETO
//Que es un objeto? son propiedades y su estructura es similar a los MAPAS (Map)
//Objets
let person = {
    name: "jesus",
    age: 23,
    alias: "Yisus"
}

//Acesso a propiedades
console.log(person.name)

//Notacion de corchetes
console.log(person["name"])

//Mdificacion de propiedades
person.name = "Adrian"
console.log(person.name)

person.age = "23"
console.log(person.age)
console.log(typeof(person.age))

//Eliminacion de propiedades
delete person.name
console.log(person)

//Nueva propiedad
person.email = "jesus.canales@gmail.com"
person["age"] = 37
person.name = "jesus"
console.log(person)

//Metodos (funciones)
let persona2 = {
    name: "Jesus",
    age: 24,
    alias: "Yisus",
    walk: function(){
        console.log("Voy caminando")
    }
}
persona2.walk()

//Anidacion de objets
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
console.log(persona3)
console.log(persona3.name)
console.log(persona3.job)
persona3.job.work()

//Igualdad de objets
let person4 = {
    name: "jesus",
    age: 23,
    alias: "Yisus"
}
console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name === person4.name )
/*
Porque marca false en la linea 76?

Los objetos cuando se guardan en memoria ya no es con un valor asociado si no con una
referencia, es decir, una direccion de memoria.
Y nostros cuando hacemos esa igualdad de identidad no se compara el valor que tiene dentro,
en realidad es la direccion de memoria, y tiene 2 direcciones de memoria, no llegamos a su valor
llegamos a su referencia en memoria.
*/

//Iteracion
for(let value in person4){
    console.log(value)
}

for(let key in person4){
    console.log(key + ": " + person4[key])
}

//Funciones como objets
function Person(name, age) { //Deberia ser una clase
    this.name = name
    this.age = age
}
let persona5 = new Person("Yisus", 23)
console.log(persona5)
console.log(persona5.name)

console.log(typeof(persona5))
console.log(typeof(person4))
