//Classes
//Nos sirve para terminar creando plantilla de objetos
//Definimos las propiedades y los metodos, pero no le damos valores, se lo damos en posterior
//PLANTILLA

export class Person{
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
let person3 = new DefaultPerson("Juan", 22)
console.log(person3)

//Acceso a propiedades
console.log(person3.name)
console.log(person3.age)
console.log(person3.alias) //Vamos asignarle un alias

person3.alias = "juanito"
console.log(person3.alias) //Ya tiene el alias, asi se pone

//Funciones en clases

class PersonWithMethod{
    constructor(name, age, alias){
        this.name = name
        this.age = age       //This sirve para guardar el datos dentro de molde (clase)
        this.alias = alias
    }
    work(){
        console.log(`${this.name} estos dias ira a trabajar y hoy cumple ${this.age}`)
    }
}
let person4 = new PersonWithMethod("Sergio", 22, "Sergay")
person4.work()


//Propiedades privadas
class PrivatePerson{
    //Hacemos que sea privada con # y tiene que se despues de la clase y antes del contructor
    #bank 
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age       
        this.alias = alias,
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}
//No queremos que alguien acceda a bank para que lo cambie o mire ese dato
let person5 = new PrivatePerson("Jesus", 23, "Yisus", "JECA12289")
console.log(person5.bank) //No podemos acceder

person5.bank = "fef"
console.log(person5.bank)
//No podemos modificarla solo crea una nueva propiedad nueva llamada bank con fef y
//El bank que pusimos private esta seguro sin que podamos acceder o mirar


//Getters y Setters
class GetSetPerson{
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age       
        this.#alias = alias,
        this.#bank = bank
    }
    get name(){
        return this.#name
    }
    set bank(newBank){
        this.#bank = newBank 
    }
}
let persona6 = new GetSetPerson("jesus", 34, "yisus", "BACK4567HF")
console.log(persona6)
console.log(persona6.name)

persona6.bank = "234jkjdah4"

//Herencia

class Animal {
    constructor(name) {
        this.name = name
        
    }
    sound(){
        console.log("El animal emite un sonido generico")
    }
}

class Dog extends Animal{
    sound(){
        console.log("guau!!")
    }
    run(){
        console.log("El perro corre")
    }
}

class Fish extends Animal{
    constructor(name, size){
        super(name),
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }
}
let myDog = new Dog("Dobby")
myDog.run()
myDog.sound()

let myFish = new Fish("pescadito", 10)
myFish.sound()
myFish.swim()

//Metodos estaticos
class MathOperation {
    static sum(a, b){
        return a + b
    }
}
//let miSuma = new MathOperation()
console.log(MathOperation.sum(2,3))