//Strings

let Myname = "Jesus"
let greeting = "Hola, " + Myname + "!"

console.log(greeting, Myname)
console.log(greeting)
console.log(typeof(greeting))

//Logitud

chain = "Muchas cosas"
console.log(chain)
console.log(chain.length)

cadena = "holaaaw"
if (cadena.length > 6){
    console.log("Pasas")
} else {
    console.log("No pasas")
}


//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])

//Aqui hay 3 opciones para buscar el ultimoc caracter
console.log(greeting[greeting.length -1])
console.log(greeting[11])
console.log(greeting.at(-1)) 
/*El .at() sirve para buscar el ultimo elemento o caracter de el string 
no sirve como en python que simplenete es greeting[-1]
*/

console.log(greeting.toUpperCase()) //Convierte todo a mayusculas