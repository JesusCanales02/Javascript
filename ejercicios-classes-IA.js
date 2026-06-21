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

//clases
class Persona {
    constructor(name, age, nickname) {
        this.name = name,
        this.age = age,
        this.nickname = nickname
    }
}
//sintaxis
let persona1 = new Persona("Ramon", 32, "Cabron")
console.log(persona1)
console.log(persona1.name)

//metodo
class Perro {
    constructor(raza, nombre, edad) {
        this.raza = raza,
        this.nombre = nombre,
        this.edad = edad
    }
    ladra(apodo){
        console.log(`El ${apodo} esta ladrando`)
    }
}
//Instancia
let perro1 = new Perro("pastor aleman", "lobo", 3)
perro1.ladra("Lobo")

//Clases por default
class ClassDefault {
    constructor(name = "default", age = 0, color = "Sin color") {
        this.name = name,
        this.age = age,
        this.color = color        
    }
}
let Midefault = new ClassDefault() //Podemos poner el nombre, edad y color y saldrán
console.log(Midefault)

//Propiedad privada
class MiPrivado {
    #bank
    constructor(name, edad, bank) {
        this.name = name,
        this.edad = edad,
        this.#bank = bank
    }
    //Sin metodo
}
let perosna3 = new MiPrivado("jesus", 32, "23432ds")
console.log(perosna3)
console.log(perosna3.bank)

//Ejercicios de getters y settes

class Auto {
    #velocidad
    constructor(brand, velocidad) {
        this.brand = brand,
        this.#velocidad = velocidad
    }
    get velocidad(){
        return `La velocidad: ${this.#velocidad} km/h`
    }
    set velocidad(nuevaVelocidad){
        if (nuevaVelocidad >= 0 && nuevaVelocidad <= 240){
            this.#velocidad = nuevaVelocidad
            return nuevaVelocidad
        }else{
            console.log("Velocidad peligrosa o invalida")
        }
    }
}
let Micarro = new Auto("Ferrari", 0)
console.log(Micarro)
Micarro.velocidad
Micarro.velocidad = 100
console.log(Micarro.velocidad)

//Segundo ejercicio
class Termostato {
    #temperatura
    constructor(temperatura = 22) {
        this.#temperatura = temperatura
    }
    get temperatura(){
        return `La temperatura es ${this.#temperatura} grados`
    }
    set temperatura(NuevaTemp){
        if (NuevaTemp >= 16 && NuevaTemp <= 30) {
            this.#temperatura = NuevaTemp
            return NuevaTemp
        }else{
            console.log("Temperatura fuera de los limites permitidos")
        }
    }
}
let Mitemperatura = new Termostato()
console.log(Mitemperatura)
Mitemperatura.temperatura = 23
console.log(Mitemperatura.temperatura)

class Usuario {
    #password
    constructor(username, password) {
        this.username = username,
        this.#password = password
    }
    get password(){
        return "Password protegido"
    }
    set password(nuevaPassword){
        if (nuevaPassword.length >= 8) {
            this.#password = nuevaPassword
            console.log(`The password: ${nuevaPassword}`)            
        }else{
            console.log("Error, password must have min 8 caracters")
        }
    }
}
let Miusuario = new Usuario("Jesus123")
console.log(Miusuario)
Miusuario.password = "12231cdscdsf"
Miusuario.password

//Herencia
//ejercicios
class Personaje {
    constructor(nombre) {
        this.nombre = nombre
    }
}

class Superheroe extends Personaje {
    constructor(nombre, superpoder) {
        super(nombre)
        this.superpoder = superpoder
    }
    usarPoder(){
        console.log(`${this.nombre} usa el poder de ${this.superpoder}`)
    }
}
let MiSuper = new Superheroe("Spiderman", "escalar")
console.log(MiSuper)
MiSuper.usarPoder()

class Empleado {
    trabajar() {
        console.log("El empleado esta trabajando")
    }
}
class Repartidor extends Empleado{
    trabajar(){
        console.log("El repartidor esta entregando una pizza")
    }
}
let empleado1 = new Empleado()
empleado1.trabajar()
let persona45 = new Repartidor()
persona45.trabajar()

class Convertidor {
    static CelsiusAFahrenheit(celsius) {
        return (celsius * 9/5) + 32
    }
    static kmMillas(km){
        return km * 0.621371
    }
}
console.log(Convertidor.CelsiusAFahrenheit(3))
console.log(Convertidor.kmMillas(4))