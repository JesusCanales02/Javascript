let myarray = []
myarray.push("Juan", "Pedro", "Luis")
console.log(myarray)

let frutas = ["Manzana", "Pera", "Uva", "Sandia"]
frutas.pop()
console.log(frutas)

let numeros = [10, 20, 30, 40]
numeros.shift()
console.log(numeros)

let nombres = ["Carlos", "Ana"]
nombres.unshift("Pedro")
console.log(nombres)

let letras = ["a", "b", "c", "d", "e"]
let letra = letras.slice(1,3)
console.log(letra)

let paises = ["Mexico", "Canada", "Brasil", "Chile"]
let pais = paises.splice(1,2)
console.log(pais)

let colores = ["Rojo", "Azul", "Verde"]
colores.splice(1,1, "Negro")
console.log(colores)

let myarray5 = new Array(5)
myarray5[0] = 1
myarray5[1] = 2
myarray5[2] = 3
myarray5[3] = 4
myarray5[4] = 5
console.log(myarray5)

let array = ["Juan", "Pedro", "Luis"]
array.push("Ana")
array.shift()
array.unshift("Maria")
console.log(array)
console.log(array.length)

let comidas = ["Pizza", "Tacos", "Sushi", "Hamburguesa"]
comidas.splice(1,2,"pasta")
console.log(comidas)

let numero = [1,2,3,4,5,6,7]
let other = numero.slice(2,5)
console.log(other)

let names = ["Juan", "Pedro", "Luis"]
names.splice(1,1,"Carlos")
console.log(names)

let myarray6 = new Array()
myarray6[2] = 1
myarray6[5] = 4
console.log(myarray6)

let fruta = ["Manzana", "Pera", "Uva"]
fruta.unshift("sandia")
console.log(fruta)
fruta.splice(1,1)
//fruta.splice(0,1,"Sandia") //tambien puedo usarlo
fruta.unshift("Kiwi")
console.log(fruta)
fruta.splice(3,1,"Melon")
console.log(fruta)
console.log(fruta.length)
/*
agrega "Sandia" al final
elimina "Manzana"
agrega "Kiwi" al inicio
reemplaza "Uva" por "Melon"
imprime el array final y su longitud
*/