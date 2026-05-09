//Array 

//Declaracion
let myArray = [] //Es mas rapido, mas simple, y no da lugar a errores
let myArray2 = new Array()
console.log(myArray)
console.log(myArray2)

//Inicializacion
myArray = [1]
myArray2 = new Array(3) //ha recervado 3 espacios vacios esperando a ser rellenados

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3 , 4) 

console.log(myArray)
console.log(myArray2)

myArray = ["Jesus", "Adrian", "Canales", "Rojas", 34, true]
myArray2 = new Array("Jesus", "Adrian", "Canales", "Rojas", 34, true) 

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "hola"
myArray2[1] = "como"
myArray2[2] = "estas"

console.log(myArray2)

myArray = []
myArray[1] = 1
myArray[2] = 2
//myArray[0] = 3 
//Un elemento vacio porque inicia en 0 no 1
myArray[4] = 7
console.log(myArray)

//----Metodos comunes

//push y pop
//pop()-----------------------------------Quita el último
//shift()---------------------------------Quita el primero
//push()----------------------------------Agrega al final
//unshift()-------------------------------Agrega al inicio

myArray = []
myArray.push("Jesus", "Juan", "Sergio", "Hector", 4) //Agrega al ultimo
console.log(myArray)

myArray.pop()
myArray.pop() //Aqui eliminamos hasta hector y queda hasta sergio
console.log(myArray)
console.log(myArray.pop()) //Elimina el ultimo y lo devuelve

//shift y unshift

myArray.shift() //Quita el primero elemento
console.log(myArray)

myArray.unshift("Vanessa", "Samantha")
console.log(myArray)

myArray.unshift("Ramon")
console.log(myArray)

myArray3 = new Array("s", "a", "3")
console.log(myArray3)
myArray3.pop()
console.log(myArray3)
myArray3.shift()
console.log(myArray3)
myArray3.unshift("S")
console.log(myArray3)
myArray3.push("lsa")
console.log(myArray3)

//----length
console.log(myArray.length) //Para saber la longitud que es 4

//Clear  //asi se borra el array
myArray = []
//myArray.length = 0 //es otra forma no tan buena, es mejor la de arriba, ALTERNATIVA
console.log(myArray)

//slice  //Es para tomar un pedazo de la array
myArray.push("Estefania", "Hector", "Diego", 45, 3)

let mynuevoArray = myArray.slice(1,2) //El elemtno 1 es hector y el 2 no lo toma en cuenta
console.log(myArray)
console.log(mynuevoArray)

let nuevoarray = myArray.slice(1,4)
console.log(nuevoarray)

//splice
myArray.splice(1,3)
console.log(myArray)

myArray = ["Estefania", "Hector", "Diego", 45, 3]
myArray.splice(1,2,"sa")
console.log(myArray)

myArray4 = new Array(4)
myArray4[0] = "Hola"
myArray4[1] = 3
myArray4[2] ="23"
myArray4[3] = 6
myArray4[4] = 0
myArray4[10] = 8
console.log(myArray4)

myArray4 = []
console.log(myArray4)

myArray4.push("nueva", "elemntos", 5)
console.log(myArray4)

myArray4.pop()
console.log(myArray4)

myArray4.unshift("otro")
console.log(myArray4)

myArray4.shift()
console.log(myArray4)

console.log(myArray4.length)

myArray4.push("again", 3, 7, "yo")
console.log(myArray4)

let yo = myArray4.slice(0,2)
console.log(yo)

myArray4.splice(0,2)
console.log(myArray4)