//Hacer un eror con try, cath
let numero = 3

try {
    console.log(numero.dw.lo)
    console.log("Se ejecuto sin errores")
    
} catch {
    console.log("se produjo un error")
    
}

const palabra = "jesus"
try {
    console.log(palabra = "dawdaw")
    console.log("El mensaje muy bueno")
    
} catch (error) {
    console.log("El nombre no es el mismo", error.message)
    //console.log("El nombre no es el mismo")  
    
    //vamos a quitar este mensaje:
    //Assignment to constant variable.
    //solo quitamos el error.message 
}

//Tambien usamos finally, esta parte siempre se ejecutara aunque este fallando el programa

let Myobjeto
try {
    console.log(Myobjeto.alias)
    
} catch (error) {
    console.log("Hay un error")
}
finally{
    console.log("Aqui sigo corriendo")
}

//tenemos los lanzamientos de errores
let lanzar = 65
try {
    console.log(lanzar)
    //throw new Error("Se produjo un error")
} catch (error) {
    console.log("Se lanzo un error")
}

//Capturar varios errores
function Sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("")
        
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("")
    }
    
    return a + b
}

try {
    console.log(Sum(3,"21"))
    
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de dato", error.message)
    } else if(error instanceof Error){
        console.log("Error de numero, debe ser entero", error.message)
    }
}

