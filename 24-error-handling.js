//Excepción
let myObject
//console.log(myObject.name)

//Tratamiento de errores
//Try-catch
try {
    //Codigo que intenta ejecutar
    console.log(myObject.name)
    console.log("Se ejecuto sin errores")
    
} catch {
    //Bloque de error
    console.log("Se produjo un error")
}

//Captura del error --------------------
try {
    console.log(myObject.name)
    console.log("Se ejecuto sin errores")
    
} catch (error) {
    console.log("Se produjo un error", error.message)
}

//finally
try {
    console.log(myObject)
    console.log("Se ejecuto sin errores")
    
} catch (error) {
    console.log("Se produjo un error", error.message)
} finally{
    console.log("Este codigo se ejectuta siempre")
}

//Lanzamiento de errores
//throw new Error("Se ha producido un error")


//Throw
function sum(a, b){
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("No se puede sumar estas propiedades")
    }
    return a + b

}
sum(3,3)

function sumIntegers(a, b) {
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Esta operacion suma numeros")
    }
    if(!(Number.isInteger(a)) || !(Number.isInteger(b))){
        throw new Error("solo puede sumar numeros enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se esta intentando sumar con cero", a , b)
        
    }
    return a + b
}

try{
console.log(sumIntegers(3,3))
//console.log(sumIntegers("5",3))
console.log(sumIntegers("7",3))
//console.log(sumIntegers("3","6"))
}catch(error){
    console.log("Se ha producido un error,", error.message)

}

//Capturar varios tipos de errores
try {
    //console.log(sumIntegers(5,10))
    //console.log(sumIntegers("5", 10))
    console.log(sumIntegers(3.2, 10))
    
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if(error instanceof Error){
        console.log("Se ha producido un error.", error.message)
    }   
}

//Crear excepciones personalizadas
class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a,
        this.b = b
    }
    printNumber(a,b){
        console.log(this.a, "+", this.b)
    }
}
try {
    console.log(sumIntegers(0, 4))
} catch (error) {
    console.log("Se ha producido un error personalizado", error.message)
    error.printNumber()
}