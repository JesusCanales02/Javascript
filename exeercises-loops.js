//🔥 1. Contar del 1 al 25
//Imprime todos los números del 1 al 25.
let numero = 1
while (numero < 26) {
    console.log(numero)
    numero++
}

//🔥 2. Contar regresivo del 30 al 10
//Usa while y decremento.
let regresivo = 30
while (regresivo > 0) {
    console.log(`La regresion: ${regresivo}`)
    regresivo--    
}

//🔥 3. Sumar números del 1 al 20
//👉 imprime solo el resultado final.
let numero1 = 1
let sumar = 0
while (numero1 < 21) {
    sumar += numero1
    numero1++
}
console.log(sumar)

//🔥 4. Sumar números pares del 1 al 30
//👉 solo suma pares.
let pares = 1
let sumar1 = 0
while (pares < 31) {
    if (pares % 2 === 0) {
        sumar1 += pares
    }
    pares++
}
console.log(sumar1)

//5. Contar cuántos impares hay del 1 al 50
//👉 solo contador, NO suma.
let impares = 1
let contar = 0
while (impares < 50) {
    if (impares % 2 !== 0) {
        contar++
    }
    impares++
}
console.log(`El numero es: ${contar}`)

//🔥 6. Mostrar el proceso de suma del 1 al 5
//Debe salir algo así:
/*
1
3
6
10
15
*/
let proceso = 1
let sumar2 = 0
while (proceso < 6) {
    sumar2 += proceso
    proceso++
    console.log(sumar2)
}

//🔥 7. Multiplicar del 1 al 6
//👉 imprime el proceso.
let miNumero = 1
let proceso1 = 1
while (miNumero < 7) {
    proceso1 *= miNumero
    miNumero++
    console.log(proceso1)  
}

//🔥 8. Imprimir números divisibles entre 4 del 1 al 40
//👉 solo los que cumplen condición.
let Minumero = 1
while (Minumero < 42) {
    if (Minumero % 4 === 0) {
        console.log(Minumero)
    }
    Minumero++
}

//9. Sumar números hasta llegar a 200
//👉 detén el loop cuando pase 200 (break o condición).
let num = 1
let Misuma = 0
while (num <= 200) {
    Misuma += num
    num++
}
console.log(Misuma)

//🔥 10. Contar del 1 al 100 pero saltando el 50
//👉 usa continue.
let saltar = 1
while (saltar < 100) {
    if(saltar === 50){
        saltar++
        continue
    }
    console.log(saltar)
    saltar++

}

let palabra = "javascript"
let i = 0
while (palabra[i]) {
    console.log(palabra[i])
    i++
}

let palabra1 = "hola"
let j = 0
while (palabra1[j]) {
    j++
}
console.log(j)

let word = "javascript"
let vocales = ["a","e","i","o","u"]
let contado = 0
let ii = 0
while (ii < word.length) {
    if (vocales.includes(word[ii])) {
        contado++
    }
    ii++
}
console.log(contado)

//4. Invertir una palabra
//let palabra = "hola"
//👉 salida:
//aloh
//📌 pista:
//empieza desde el final
//usa i = palabra.length - 1
let palabrin = "hola"
while (palabrin) {
    console.log(palabrin.split("").reverse())
    palabrin++
}

//🔥 5. Reemplazar vocales por "*"
//let palabra = "javascript"
//👉 salida:
//j*v*scr*pt
let Reemplazar = "javascript"
let i1 = 0
let resultado = ""
while (i1 < Reemplazar.length ) {
    if (Reemplazar[i1] === "a" ||
        Reemplazar[i1] === "e" ||
        Reemplazar[i1] === "i" ||
        Reemplazar[i1] === "o" ||
        Reemplazar[i1] === "u" 
    ) {
        resultado += "*"
    } else {
        resultado+=Reemplazar[i1]
    }
    i1++
}
console.log(resultado)