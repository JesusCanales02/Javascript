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

//Metodos Comunes
console.log(greeting.toUpperCase()) //Convierte todo a mayusculas
console.log(greeting.toLowerCase()) //Convierte todo a minuscula
console.log(greeting.indexOf("Jesus")) //Busca la palabra en el texto y dice en que indice esta
console.log(greeting.indexOf("Hola"))
console.log(greeting.includes("Jesus")) //Busca la palabra si esta en la variable si esta TRUE si no FALSE
console.log(greeting.includes("!")) 
console.log(greeting.includes("Siii"))
console.log(greeting.slice(0, 5)) // Solo sirve para retornar un pedazo de un indice a otro
console.log(greeting.replace("Jesus", "Sergio")) // Aqui simplemente hacemos un cambio de palabras existentes,
//La palabra que se cambio fue "Jesus" por "Sergio", si no existe no hace cambio
console.log(greeting.replace("jesus", "sergio")) //No funciona porque no existe "jesus" solo "Jesus"


//Template literals (plantillas literales)
//Sirven para crear strings que sean de varias lineas o interporar variables por un lado

let message = `Es mi
curso de 
javascript`

console.log(message)

let mensaje = `Yo siempre
y mi mala
suerte`
console.log(mensaje)

console.log(`Hii!! yo soy ${Myname}`)
console.log(`Asi ee, ${greeting}`)

/*
EJEMPLO...
let word = "apoco si"
let other = "Mi richard " + word
console.log(word)
console.log(other)
console.log(other[0])
console.log(word.at(-1))
console.log(other.toUpperCase())
*/

/*
Necesidad	Método

Quitar espacios extremos----------------trim()
Trabajar con palabras-------------------split(" ")
Trabajar con letras---------------------split("")
Invertir--------------------------------reverse()
Unir------------------------------------join()
Cortar----------------------------------slice()
Buscar----------------------------------includes()
Saber si existe-------------------------includes()
Saber posición--------------------------indexOf()
Cambiar texto---------------------------replace(/ /g," ")
Solo al inicio--------------------------startsWith("")
Solo al final---------------------------endsWith("")
pop()-----------------------------------Quita el último
shift()---------------------------------Quita el primero
push()----------------------------------Agrega al final
unshift()-------------------------------Agrega al inicio
*/