// if, else, if, else
// if (si)

let age = 18
let edad = 28

if (age == 18){
    console.log("La edad es 18")
}
//else (si no)

if(age == 18){
    console.log("La edad es 18")
}else if(age < 18){
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 18 y no es menor de edad")
}

//Operador ternario
// hacemos el mismo de el de la edad de 18
age == 18 ? console.log("Es igual a 18") : console.log("No es igual")

edad == 25
? console.log("Si es 28 hermano")
: console.log("No lo es hermano")

const op = age == 18 ? ("Si es mayottt") : ("no lo ess")
console.log(op)

const ejempl = 4
ejempl == 4 ? console.log("dwadwa") : console.log("dwadwa")

const nose = age == 17 ? ("deded") : ("ccececec")
console.log(nose)

const reemov = 17
reemov == 18 ? console.log("Si es") : console.log("No es 17")

const mensaje = edad == 28 ? ("La edad es 28") : ("no es")
console.log(mensaje)
//Diferentes formas de usar ternarios

//SWITCH
/*Es eficiente cuando tenemos muchas condiciones que 
verificar contra una misma variable
*/
let day = 1
let dayname 
switch(day){
    case 0:
        dayname = "Lunes"
        break
    case 1:
        dayname = "Martes"
        break
    case 2:
        dayname = "Miercoles"
        break
    case 3:
        dayname = "Jueves"
        break
    case 4:
        dayname = "Viernes"
        break
    case 5:
        dayname = "Sabado"
        break
    case 6:
        dayname = "Domingo"
        break
    default:
        dayname = "No existe ese dia"
}
console.log(dayname)

let pasaste = 9
let si = ""
switch(pasaste){
    case 0:
        si = "Nota muy baja"
        break
    case 1:
        si = "Te faktan puntos"
        break
    case 2:
        si = "Necesitas una decima"
        break
    case 3:
        si = "Psaste por la minima"
        break
    case 4:
        si = "Psaste"
        break
    default:
        si = "Ni al caso joven"
}
console.log(si)

let suma = 3
let resultado
let a = 6
let b = 2
switch(suma){
    case 0:
        resultado = a + b
        break
    case 1:
        resultado = a - b
        break
    case 2:
        resultado = a / b
        break
    case 3:
        resultado = a * b
        break        
    default:
        resultado = "No sirve"
        break
}
console.log(resultado)