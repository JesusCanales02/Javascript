//While 
/*
/*
let f = 20
while (f > 15) {
    console.log(`El numero es: ${f}`)
    f--
}

let count = 0
while (count < 4){
    console.log(`Mira el numero: ${count}`)
    count++
}
//Ejercicios
let variable = 0
while (variable < 11) {
    console.log(`El numero es: ${variable}`)
    variable++
}

//2. Sumar números del 1 al 50
let suma = 0
let i = 1
while(suma < 10){
    suma += i
    //0 + 1 = 1
    //1 + 2 = 3
    //3 + 3 = 6
    //6 + 4 = 10
    i++
    console.log(suma)
}

//3. Cuenta regresiva
let regresivo = 10
while (regresivo > 0) {
    console.log(`la regresion es: ${regresivo}`)
    regresivo--
}

/*
2. Suma SOLO números pares del 1 al 20
Debes:
recorrer del 1 al 20
sumar solo pares
imprimir resultado final
*/
let pares = 1
let sumar = 0
while (pares < 11) {
    if(pares % 2 === 0){
        console.log(pares)
        sumar += pares
        //Necesitamos un lugar donde guardar el valor y ese es SUMAR 
        //Entonces aqui fucniona asi..
        // Sumar = 0 // Pares = 2 /// += /// Sumar (0) = Sumar (0) + Pares (2) = 2
        // Sumar = 2 + Pares (3) == nu se cumple porque 3 el residuo no es cero
        //Aso que seguimos en 2
        //Sumar = 2 + Pares (4) == 6 Sii cumple ahora sumar vale 6, asi que lo guarda, por eso se dice asi GUARDAR, por eso se crea una variable
        // Sumar = 6 + Pares (5) == NO CUMPLE, 5 su residuo no es 0, asi que seguimos
        // Sumar = 6 + Pares (6) == Si cumple, y es 12, asi que Sumar ahora es 12
        //Sumar = 12 + Pares (7) === No cumple, SEGUMOS 
        // Sumar = 12 + Pares (8) === Si cumple, ahora es 20
        //Sumar = 20 + Pares (9) === No cumple, SEGUMOS
        //Sumar = 20 + Pares (10) === Si cumple, asi que es 30 y ahi llegamos
    }
    pares++
}
console.log(sumar)

/*
Ejercicio:
Usa while para encontrar y sumar todos los números impares entre 1 y 20, pero además:
imprime cada número impar
al final imprime la suma total

Reglas del ejercicio
Tienes que usar:
while
% 2 !== 0 (impares)
acumulador (suma)
contador (i)
*/

/*let numero2 = 1
let contador1 = 0
while (numero2 < 21) {
    if(numero2 % 2 !== 0){
        console.log(`Numero total de impares ${numero2}`)
        contador1 += numero2
        console.log(contador1)
    }
    numero2++
}
*/
/*
//1. Contar del 20 al 1
let miNumero = 21
while (miNumero > 1) {
    miNumero--
    console.log(miNumero)
}
*/
/*
//2. Multiplicar números del 1 al 5
let num1 = 1
let miContador = 1
while (num1 <= 5) {
    miContador *= num1
    console.log(num1)
    num1++
}
    */
  

//console.log(miContador)

let palabra = "javascript"
let i = 0
let contador2 = 0
while (palabra[i]) {
    i++
    //I regresenta la posicion de la palabara JavaScript que es 0
    // i++ es muevete a la sigueinte que es [a] y si existe el comtador suma otro 
    //por eso el contador2++ suma uno
    contador2++
}
console.log(contador2)

//2. Mostrar números divisibles entre 3
let miNumero1 = 1
while (miNumero1 < 11) {
    if(miNumero1 % 3 === 0){
        console.log(miNumero1)
    }
    miNumero1++
}

// 3. Sumar números hasta pasar 100

let sumar1 = 1
let contador3 = 0
while (contador3 <= 100) {
    contador3 += sumar1
    sumar1++
}

console.log(contador3)
console.log(sumar1)

//1. Contar del 1 al 10
let miNumero2 = 1
while (miNumero2 < 11) {
    console.log(miNumero2)
    miNumero2++
}

//Contar regresivo del 10 al 1
let regresivo1 = 10
while (regresivo1 > 0) {
    console.log(regresivo1)
    regresivo1--
}

//3. Imprimir solo números pares del 1 al 10
let mipar = 1
while (mipar < 11) {
    if(mipar % 2 === 0){
        console.log(`Los numeros par: ${mipar}`)
    }
    mipar++
}

//🔥 4. Imprimir solo números impares del 1 al 10
let miimpar = 1
while (miimpar < 11) {
    if(miimpar % 2 !== 0){
        console.log(miimpar)
    }
    miimpar++
}

//Total de numeros del 1 al 15
let total1 = 1
let contador4 = 0
while (total1 < 15) {
    contador4++
    total1++
    
}
console.log(total1)

//1. Contar cuántos números pares hay del 1 al 20
let num2 = 1
let contado = 0
while (num2 < 21) {
    if(num2 % 2 === 0){
    contado++
}
    num2++    
}
    console.log(`total de pares son: ${contado}`)

//Sumar los imapres del 1 al 15
let impar1 = 1
let sum = 0
while (impar1 < 16) {
    if(impar1 % 2 !== 0){
    sum+=impar1
    }
    impar1++
    
}
console.log(sum)

//acumulador
let acumulador1 = 1
let suma2 = 0
while (acumulador1 < 6) {
    suma2 += acumulador1
    acumulador1++
    console.log(suma2)
}

//4. Contar cuántos números divisibles entre 3 existen del 1 al 30
let divisibles1 = 1
let miContador1 = 0
while (divisibles1 < 31) {
    if (divisibles1 % 3 === 0) {
        miContador1++
    }
    divisibles1++
    
}
console.log(miContador1)

//5. Multiplicar números del 1 al 4 y mostrar el proceso
let miNumero3 = 1
let multiplicar = 1
while (miNumero3 < 5) {
    multiplicar *= miNumero3
    miNumero3++
    console.log(multiplicar)
    
}