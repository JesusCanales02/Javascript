/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Nombre {
    constructor(name, lastname) {
        this.name = name,
        this.lastname = lastname
    }
}
let Yo = new Nombre("jesus", "canales")
console.log(Yo)
// 2. Añade un método a la clase que utilice las propiedades
class MiNombre {
    constructor(name, lastname) {
        this.name = name,
        this.lastname = lastname
    }
    saludar(){
        console.log(`Hola ${this.name}!!, tu apellido es ${this.lastname} verdad?`)
    }
}
let otro = new MiNombre("Jesús", "Canales")
console.log(otro)
otro.saludar()
// 3. Muestra los valores de las propiedades e invoca a la función
console.log(otro.name)
console.log(otro.lastname)
otro.saludar()
// 4. Añade un método estático a la primera clase
class MiApellido {
    constructor(name, lastname) {
        this.name = name,
        this.lastname = lastname
    }
    static saludar(alguien){
        return `Hola ${alguien}!!`
    }
}
// 5. Haz uso del método estático
console.log(MiApellido.saludar("jesus"))
// 6. Crea una clase que haga uso de herencia
class Animal {
    constructor(nombre, raza = "sin raza") {
        this.nombre = nombre,
        this.raza = raza
    }
    ruido(){
        console.log("Ruido generico")
    }
}

class gato extends Animal {
    constructor(nombre, altura) {
        super(nombre)
        this.altura = altura
    }
    ruido(){
        console.log("Miauu")
    }
}
let Migato = new gato("Sam", 34)
console.log(Migato)
Migato.ruido()
// 7. Crea una clase que haga uso de getters y setters
/*
class Cuenta {
    constructor(costo, comida) {
        this.valorTotal = costo,
        this.comida = comida
    }
    get costo(){
        let mostrar = `Su costo fue de ${this.valorTotal}`
        return mostrar
    }
    set costo(descuento){
        if (descuento > 2000) {
            descuento /= 2
            this.valorTotal = descuento
        }else{
            this.valorTotal = descuento
        }
    }
}
let persona = new Cuenta(3231,"Tacos")
console.log(persona.costo)
persona.costo = 6000
console.log(persona.costo)
persona.costo = 1826
console.log(persona.costo)
*/
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Cuenta {
    #costo
    constructor(costo, comida) {
        this.#costo = costo,
        this.comida = comida
    }
    get costo(){
        let mostrar = `Su costo fue de ${this.#costo}`
        return mostrar
    }
    set costo(descuento){
        if (descuento > 2000) {
            descuento /= 2
            this.#costo = descuento
        }else{
            this.#costo = descuento
        }
    }
}
let persona = new Cuenta(3231,"Tacos")
console.log(persona.costo)
persona.costo = 6000
console.log(persona.costo)
persona.costo = 1824
console.log(persona.costo)
// 9. Utiliza los get y set y muestra sus valores
console.log(persona.costo)
persona.costo = 3402
console.log(persona.costo)

// 10. Sobrescribe un método de una clase que utilice herencia 
class Pizza {
    constructor(nombre, precio) {
        this.nombre = nombre,
        this.precio = precio
    }
    grito(){
        console.log("La pizza ya esta lista!!")
    }
}
class Orden extends Pizza{
    constructor(nombre, medida) {
        super(nombre)
        this.medida = medida
    }
    grito(){
        console.log("La pizza de peperoni ya salio vengan por ella!!")
    }
}
let cliente = new Orden("Peperoni", "Mediana")

cliente.grito()