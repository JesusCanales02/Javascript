/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
let Myobjeto
try {
    console.log(Myobjeto.ad)
} catch (error) {
    console.log("Error", error.message)
    
}
// 2. Captura una excepción utilizando try-catch y finally
let obejto = 3
try {
    console.log(obejto)
    console.log("Correcto")
} catch (error) {
    console.log("Error", error.message)    
}finally{
    console.log("Esto siempre corre")
}
// 3. Lanza una excepción genérica
function Averiguarsuma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Error de numero")
    }
    return a + b
}
try {
    console.log(Averiguarsuma(3, "d"))
    
} catch (error) {
    console.log(error.message)
    
}
// 4. Crea una excepción personalizada
class nombre extends Error {
    constructor(name, message) {
        super(message)
        this.name = name     
    }
}
function VerNombre(name) {
    if (name === "dede") {
        throw new nombre("ErrorInvalido","No se permite ese usuario")
    }
    return `Tu nombre de usuario es ${name}`
    
}
try {
    console.log(VerNombre("dawwae"))
} catch (error) {
    console.log(error instanceof nombre)
    console.log("Erro de sistema")
    console.log(error.message)
}
// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida
function ParecidosSuma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Error de dato")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("No es un entero")
    }
    return a + b    
}
try {
    console.log(ParecidosSuma(3,3.3))
    
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de dato")
        
    } else if(error instanceof Error){
        console.log("Debe ser un numero entero")
    }
    
}
// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const Miarray = [3,34,"jesus",3.4,"23"]
for(const invertir of Miarray){
    try {
        const resultado = parseFloat(invertir)

        if (isNaN(resultado)) {
            throw new Error("No hay numeros")
        }
        console.log("Todo bien", resultado) 
    } catch (error) {
        console.log(error.message)
    }
}
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class Indetificar extends Error {
    constructor(message) {
        super(message)
        this.name = "ErrorPropiedadInvalida"
    }
}
let Minombre = {
    name : "Jesús",
    lastname : "Canales",
    age : 23,
    Hobbie : "Programming" 
}
function Verificar(objeto, ver) {
    let entrada = false
    for (let key in objeto) {
        if (key === ver) {
            entrada = true
        }
    }
    console.log("Se encontro?", entrada)

    if (entrada === false) {
        throw new Indetificar("No hay propiedad especifica")
    }
    return "Si esta"
    
}
try {
    console.log(Verificar(Minombre, "name"))
    console.log("todo bien")
    
} catch (error) {
    console.log(error.message)
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function Reintentos(accion) {
    for (let index = 0; index < 10; index++) {
        try {
            console.log(`Numero de intentos ${index}`)
            let resultado = accion()            
            return resultado
        } catch (error) {
            console.log(`El intento ${index} fallo, intentalo otra vez`)
            
        }
    }
    throw new Error("Error")
}

function miFuncionExitosa() {
    return "¡Conexión establecida con éxito! 🎉";
}

console.log("--- Iniciando Prueba Exitosa ---");
try {
    // Le pasamos la función buena
    let respuesta = Reintentos(miFuncionExitosa); 
    console.log("Resultado de la función:", respuesta);
    console.log("todo bien");
} catch (error) {
    console.log(`🚨 FALLO DEFINITIVO: ${error.message}`);
}


console.log("\n-----------------------------------\n");