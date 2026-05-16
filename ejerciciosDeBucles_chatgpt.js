//While 
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
let numero2 = 1
let contador1 = 0
while (numero2 < 21) {
    if(numero2 % 2 !== 0){
        console.log(`Numero total de impares ${numero2}`)
        contador1 += numero2
        console.log(contador1)
    }
    
    numero2++
    
}