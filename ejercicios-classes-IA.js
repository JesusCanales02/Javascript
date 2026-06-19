class Person {
    #bank
    constructor(name, age, bank = "JA4NROJ542") {
        this.name = name,
        this.age = age,
        this.#bank = bank
    }
    //Sin Metodo
    get bank(){
        let Tarjeta_Banco = `Su numero de tarjeta es ****${this.#bank.slice(-4)}`
        return Tarjeta_Banco
    }
    set bank(Nueva_tarjeta){
        if (Nueva_tarjeta.length === 9) {
            this.#bank = Nueva_tarjeta
            return Nueva_tarjeta
        }
        else{
            console.log("Error")
        }

    }
}
let persona = new Person("Jesus", 23)
console.log(persona)
console.log(persona.bank)
persona.bank = "1234gtkrd"
console.log(persona.bank)

//----------------------------------------------------

class SelectorVolumen {
    #nivel
    constructor(nivel = 5) {
        this.#nivel = nivel
    }
    get nivel(){
        let Escucha = `El volumen es de ${this.#nivel}`
        return Escucha
    }
    set nivel(Nuevo_volumen){
        if (Nuevo_volumen > 0 && Nuevo_volumen < 10) {
            this.#nivel = Nuevo_volumen
            return Nuevo_volumen
        }else{
            console.log("Error de volumen")
        }
    }
}
let volumen = new SelectorVolumen()
console.log(volumen.nivel)
volumen.nivel = 2
console.log(volumen.nivel)
volumen.nivel = -1
console.log(volumen.nivel)

//----------------------------------------------------

class Producto {
    #Precio
    constructor(nombre, Precio_Inicial) {
        this.nombre = nombre,
        this.#Precio = Precio_Inicial 
    }
    //Sin algun metodo
    get precio(){
        return `El precio es  $${this.#Precio}`
    }
    set precio(Nuevo_precio){
        if (Nuevo_precio > 0) {
            this.#Precio = Nuevo_precio            
        }else{
            console.log("Error")

        }
    }
}
let price = new Producto("jesus", 34)
console.log(price)
console.log(price.precio)
price.precio = 46
console.log(price.precio)

