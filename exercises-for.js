//1. Filtrar números menores a 5
let nums = [2, 7, 1, 9, 4, 6]
let nuevoArray = []
for (let index = 0; index < nums.length; index++) {
    if (nums[index] < 5){
        nuevoArray.push(nums[index])
    }
    
}
console.log(nuevoArray)

//Invertir un array usando push
let arr = [1, 2, 3, 4]
let newArray = []
for (let index = arr.length - 1; index >= 0; index--) {
    
    newArray.push(arr[index])
}
console.log(newArray)

//1. Mostrar números del 1 al 15 (for)
for (let index = 0; index < 16; index++) {
    console.log(index)
}

//2. Sumar números pares del 1 al 20 (while)
let Minumero = 1
let pares = 0
while (Minumero < 21) {
    if (Minumero % 2 === 0) {
        pares += Minumero
    }

    Minumero++
}
console.log(pares)

//3. Crear un nuevo array con números mayores a 5 (for)
let array = [1, 2, 5, 6, 8, 12, 45]
let nuevoArray1 = []
for (let index = 0; index < array.length; index++) {
    if (array[index] >= 5) {
        nuevoArray1.push(array[index])
    }

}
console.log(nuevoArray1)

//4. Invertir un string usando while
 
let guarda = ""
let palabra = "codigo"
let indice = palabra.length -1
while (indice >= 0) {
    guarda += palabra[indice]
    indice--
}
console.log(guarda)

//invertir un string

let Mipalabra = "jesus"
let guardarPalabra = ""
let index1 = Mipalabra.length - 1

while (index1 >= 0) {
    guardarPalabra += Mipalabra[index1]
    index1--
    
}
console.log(guardarPalabra)


