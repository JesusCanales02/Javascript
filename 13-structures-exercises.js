/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
myArray = ["perro", "gato", "elefante", "leon", "tiburon", "ballena"]
console.log(myArray)
// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Lagarto")
myArray.push("delfin")
console.log(myArray)
// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2,1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros
mySet = new Set(["juegos del hambre", "Luna de pluton", "libro de la guerra", "f1", "Divergente"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("f1")
console.log(mySet)
// 6. Elimina uno concreto a tu elección
mySet.delete("f1")
console.log(mySet)
// 7. Crea un mapa que asocie el número del mes a su nombre
myMap = new Map([
    ["1","Enero"],
    ["2","febrero"],
    ["3","marzo"],
    ["4","abril"],
    ["5","mayo"],
    ["6","junio"],
    ["7","julio"],
    ["8","agosto"],
])
console.log(myMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.has("5"))
console.log(myMap.get("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("meses",["invierno","verano"])
console.log(myMap)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
myArray2 = new Array(4)
myArray2[0] = 1
myArray2[1] = 2
myArray2[2] = 3
myArray2[3] = 4
myArray2[4] = 4
console.log(myArray2)
mySet2 = new Set(myArray2)
console.log(mySet2)
myMap1 = new Map([
    ["numeros", mySet2]
])
console.log(myMap1)