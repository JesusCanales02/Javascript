//Declaracion
let myset = new Set()
console.log(myset)

//Inicializacion
myset = new Set(["Juan", "Pedro", "Maria"])
console.log(myset)

let nombres = new Set()
nombres = new Set(["Ana", "Luis", "Carlos"])
console.log(nombres)
nombres.delete("Luis")
console.log(nombres)

let numeros = new Set([1,2,3,4,5])
console.log(numeros.has(3))

let colores = new Set(["Rojo", "Azul", "Verde"])
console.log(colores.size)

let duplicados = new Set(["Hola", "Hola", "Hola", "JS"])
console.log(duplicados)

let frutas = new Set(["Manzana", "Pera", "Uva"])

myarray = Array.from(frutas)
console.log(myarray)

let numero = [1,1,2,2,3,3]
myset1 = new Set(numero)
console.log(myset1)

let mySet4 = new Set()
console.log(mySet4)
mySet4.add("Javascript")
console.log(mySet4)
mySet4.add("React")
console.log(mySet4)
mySet4.delete("Javascript")
console.log(mySet4)
mySet4.delete("React")
console.log(mySet4)

let letras = new Set(["a", "b", "c"])
letras.delete("x")
console.log(letras)

let name = ["Juan", "Pedro", "Juan", "Luis", "Pedro"]
myset9 = new Set(name)
console.log(myset9)

let crear = new Set()
console.log(crear)

crear = new Set(["React","Javascript","React","HTML"])
console.log(crear)
console.log(crear.size)

let number = new Set([10,20,30,40,50])
number.delete(20)
number.delete(50)
console.log(number)
console.log(number.size)

let fruts = new Set(["Manzana", "Pera", "Uva"])
if(fruts.has("Pera") === true){
    console.log(fruts.delete("Pera"))
}else{
    console.log("No existe")
}
console.log(fruts)
/*
verifica si "Pera" existe
si existe, elimínala
imprime el Set final
usa has() + delete()
*/

let array = ["Juan", "Pedro", "Juan", "Luis"]
mySet0 = new Set(array)
mySet0.add("Carlos")
console.log(mySet0)

let mySet12 = new Set(["a", "b", "c"])
let myArray12 = Array.from(mySet12)
console.log(myArray12)
myArray12.push("d")
console.log(myArray12)
let nuevoset = new Set(myArray12)
console.log(nuevoset)
