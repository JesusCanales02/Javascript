let myMap = new Map()
myMap = new Map([
    ["nombre","Juan"],
    ["edad", 23],
    ["pais", "Mexico"]
])
console.log(myMap)

let usuario = new Map([
    ["name", "Pedro"],
    ["email", "pedro@gmail.com"],
    ["age", 30]
])

console.log(usuario.get("email"))
console.log(usuario.get("age"))

let frutas = new Map([
    ["a", "Manzana"],
    ["b", "Pera"],
    ["c", "Uva"]
])
if(frutas.has("b") === true){
    console.log(frutas.delete("b"), "b ya no existe")
} else{
    console.log("Erro")
}
console.log(frutas)

/*
verifica si existe la llave "b"
si existe, elimínala
imprime el Map final
*/

let colores = new Map([
    ["1", "Rojo"],
    ["2", "Azul"],
    ["3", "Verde"]
])
console.log(colores.size)
console.log(colores.keys())

let datos = new Map([
    ["nombre", "Carlos"],
    ["edad", 20]
])
datos.set("nombre", "Luis")
datos.set("ciudad", "Tijuana")
console.log(datos)

/*
cambia "Carlos" por "Luis"
agrega "ciudad" → "Tijuana"
imprime el Map
*/