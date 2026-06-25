//Console

//log
console.log("hola javascript!")

//error
console.error("este es un mensaje de error")
console.error("Error al conectarse a la base de datos: ", new Error("Conexion fallida"))

//warn
console.warn("Esta es una advertencia")

//info
console.info("Este es un mensaje de informacion adicional")

//table
let data = [
    {name:"Jesus", age:23},
    {name:"Sergio", age:22}
]
console.table(data)

//group 
console.group("Usuario:")
console.log("Jesus")
console.log("Juan")
console.groupEnd() //Aqui cerramos el grupo
console.log("dwadwa")

//time
console.time("tiempo de ejecucion")
for (let index = 0; index < 1000; index++) {
}
console.timeEnd("tiempo de ejecucion")
//Y se pueden mezclar

//assert
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")
//debe ser falso para que te slaga en la consola


//count
console.count("click")
console.count("click")
console.count("click")
console.countReset("click")
console.count("click")

//trace
function funcA(){
    funcB()
}
function funcB(){
    console.trace("Segumiento de la ejecucion")
}
funcA()

//Clear
console.clear()
