//Hacer un eror con try, cath
let numero = 3

try {
    console.log(ndwadaw)
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