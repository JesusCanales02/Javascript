//Set 

//Declaracion

let mySet = new Set() //La sintaxis si es asi no como el array, myarray = []
console.log(mySet)

//Inicializacion
mySet = new Set(["Jesus", "Canales", "Rojas", 53, true, "jesus.canales@cetys.com"])
console.log(mySet)

//Metodos comunes

//add y delete
mySet.add("https://jesus.com")
console.log(mySet)

mySet.delete("https://jesus.com")
console.log(mySet)

console.log(mySet.delete("Jesus"))
console.log(mySet.delete(4))
console.log(mySet)

//Has 
console.log(mySet.has("Canales"))
console.log(mySet.has("Jesus"))

//size
console.log(mySet.size)

//Convertir un set a Array
let myArray = Array.from(mySet)
console.log(myArray)

let myArray2 = Array.from(mySet)
console.log(myArray2)

//Convertir un Array a set
mySet = new Set(myArray)
console.log(mySet)

mySet = new Set(myArray2)
console.log(mySet)

//La diferncia es que Set no permite elemntos repetidos
mySet.add("Canales")
mySet.add("Canales")
mySet.add("CAnalEs") //Aqui se guarda porque es diferente
console.log(mySet)

let mySet2 = new Set()
console.log(mySet2)

mySet2 = new Set(["Adrian", "Rojas", 2, 4, false])
console.log(mySet2)

console.log(mySet2.add("Otro"))

console.log(mySet2.delete("Otro"))
console.log(mySet2)

console.log(mySet2.has("Adrian"))
console.log(mySet2.size)

let myArray3 = Array.from(mySet2)
console.log(myArray3)

mySet2 = new Set(myArray3)
console.log(mySet2)