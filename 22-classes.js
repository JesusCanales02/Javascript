//Classes
//Nos sirve para terminar creando plantilla de objetos
//Definimos las propiedades y los metodos, pero no le damos valores, se lo damos en posterior
//PLANTILLA

class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age       //This sirve para guardar el datos dentro de molde (clase)
        this.alias = alias
    }

}

//Sintaxis
let person = new Person("jesus", 23, "Yisus")
let person1 = new Person("adrian", 18, "vercruz")
console.log(person)
console.log(person1)
console.log(typeof(person))
//Podemos crear cualquier person porque ya esta el molde para usarlo

//Valores por defecto
class DefaultPerson {
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let person3 = new DefaultPerson("Juan", 22, "juanito")
console.log(person3)

//Acceso a propiedades