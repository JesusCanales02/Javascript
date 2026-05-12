//Map

//Declaracion
let myMap = new Map()
console.log(myMap)

//Inicializacion
myMap = new Map([
    ["name", "Jesus"],
    ["email", "jesus.canales@cetys.edu.mx"],
    ["edad", 23]
])
console.log(myMap)

//Metodos y propiedades

//set 
myMap.set("alias", "yisus")
console.log(myMap)
myMap.set("name", "Adrian")
console.log(myMap)
//No tenemos 5 elementos, lo que hace set aparte de meter nuevos, actualiza la llave ya utlizada

//get
//Busca la clase y regresa su valor
console.log(myMap.get("name"))
console.log(myMap.get("na")) //Ni existe "undefined"
console.log(myMap.get("alias"))

//has
console.log(myMap.has("name"))
console.log(myMap.has("age"))
//regresa true or false si existe la clase

//delete
myMap.delete("email")
console.log(myMap)

//keys
console.log(myMap.keys())
//Puras llaves no das


//values
console.log(myMap.values())
//Puros valores no dice


//entries
console.log(myMap.entries())
//Nos trae claves y valores


//size
console.log(myMap.size)

//Clear
myMap.clear()
console.log(myMap)

